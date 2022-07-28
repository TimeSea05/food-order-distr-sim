package utilities

import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"os"
	"strings"
	"time"

	"github.com/TimeSea05/database"
	"github.com/TimeSea05/models"
)

func RegisterRandomCouriers() {
	const COURIER_NUM = 250

	nameFile, err := os.Open("static/names.txt")
	if err != nil {
		panic(err)
	}
	defer nameFile.Close()

	content, _ := ioutil.ReadAll(nameFile)
	nameArr := strings.Split(string(content), "\n")
	nameArrLen := len(nameArr)

	var courier models.Courier
	rand.Seed(time.Now().Unix())
	for i := 0; i < COURIER_NUM; i++ {
		courier.Name = nameArr[rand.Intn(nameArrLen)]
		courier.Age = uint(rand.Intn(30) + 20)
		courier.Credit = uint(rand.Intn(40) + 80)
		courier.Position = fmt.Sprint(&(models.Point{
			X: uint(rand.Intn(100)),
			Y: uint(rand.Intn(100)),
		}))
		courier.BlockID = mapPosToBlockID(courier.Position)
		courier.IsAvailable = (rand.Float64() < 0.8)

		database.DB.Create(&courier)
	}
}
