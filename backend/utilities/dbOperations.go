package utilities

import (
	"fmt"
	"sync"
	"time"

	"github.com/TimeSea05/database"
	"github.com/TimeSea05/models"
)

var orderChannel = make(chan models.Order, 64)
var wg sync.WaitGroup
var mutex sync.Mutex

// Producer
func GetOrder() {
	wg.Add(1)

	for {
		// Take a order from the database, then put it into the channel
		// When there is no order in the database, then wait
		// Do remember to delete it from the database
		mutex.Lock()
		var order models.Order
		for database.DB.First(&order).Error != nil {
			mutex.Unlock()
			time.Sleep(time.Millisecond * 50)
			mutex.Lock()
		}
		mutex.Unlock()

		orderChannel <- order
		database.DB.Model(&models.Order{}).Where("id = ?", order.ID).Delete(&order)
	}
}

// Consumer
func ProcessOrder() {
	wg.Add(1)

	for {
		order := <-orderChannel
		userPosition := order.Position
		userBlockID := mapPosToBlockID(userPosition)

		// currently we suppose that we can find available couriers in each block
		// TODO: deal with the case that there is no couriers in certain block
		var couriers []models.Courier
		database.DB.Find(&couriers, "block_id = ?", userBlockID)
		var selectedCourier models.Courier = couriers[0]

		// TODO: the credit of couriers should also be taken into consideration
		// when selecting couriers
		for _, courier := range couriers {
			isDistShorter := calcDist(order.Position, courier.Position) < calcDist(order.Position, selectedCourier.Position)
			if courier.IsAvailable && isDistShorter {
				selectedCourier = courier
			}
		}

		// Since we have selected this courier, this courier is
		// no longer available
		database.DB.Model(&models.Courier{}).Where("name = ?", selectedCourier.Name).Update("is_available", 0)

		// When the server has selected the courier,
		// the courier then need to go to the position of user
		// In fact, the courier need to go to the position of restaurant,
		// then go to the position of user,
		// but for simplicity, now we omit the factor of restaurant
		currentPos := selectedCourier.Position
		for currentPos != order.Position {
			updatePosition(&currentPos, order.Position)
			database.DB.Model(&models.Courier{}).Where("name = ?", selectedCourier.Name).Update("position", currentPos)
			database.DB.Model(&models.Courier{}).Where("name = ?", selectedCourier.Name).Update("block_id", mapPosToBlockID(currentPos))
			time.Sleep(time.Millisecond * 250)
		}

		// The current order finished. The selected courier is also free now
		database.DB.Model(&models.Courier{}).Where("name = ?", selectedCourier.Name).Update("is_available", 1)
		fmt.Printf("Order processed. ID: %d\n", order.ID)
	}
}

func RunProcessOrderTask() {
	for i := 0; i < 4; i++ {
		go GetOrder()
	}

	for i := 0; i < 32; i++ {
		go ProcessOrder()
	}

	wg.Wait()
}
