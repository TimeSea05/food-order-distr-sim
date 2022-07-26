package utilities

import (
	"time"

	"github.com/TimeSea05/database"
	"github.com/TimeSea05/models"
)

func getOrder() models.Order {
	var order models.Order
	database.DB.First(&order)
	return order
}

func ProcessOrder() {
	order := getOrder()
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
		time.Sleep(time.Millisecond * 250)
	}

	// The current order finished. We need to delete it from the database
	// Also, the selected courier is also free now
	database.DB.Model(&models.Order{}).Where("id = ?", order.ID).Delete(&order)
	database.DB.Model(&models.Courier{}).Where("name = ?", selectedCourier.Name).Update("is_available", 1)
}
