package controllers

import (
	"log"

	"github.com/TimeSea05/database"
	"github.com/TimeSea05/models"
	"github.com/TimeSea05/utilities"
	"github.com/gofiber/fiber/v2"
)

func OrderLogger(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	order := models.Order{
		ID:        utilities.GenSnowFlakeID(),
		Username:  data["username"],
		OrderList: data["orderlist"],
		Price:     data["price"],
		Position:  data["position"],
	}

	log.Println("Received Food Order: ", &order)
	database.DB.Create(&order)

	return c.JSON(order)
}
