package database

import (
	"github.com/TimeSea05/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open("root:041578@/mysql"), &gorm.Config{})
	if err != nil {
		panic("could not connect to the database")
	}

	DB = connection

	connection.AutoMigrate(&models.Order{})
	connection.AutoMigrate(&models.Courier{})
}
