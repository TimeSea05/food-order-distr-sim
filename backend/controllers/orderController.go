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

	log.Printf("\033[1;33m*Receiced a food order, \033[1;34mID: %d\033[0m %s", order.ID, order.String())

	database.DB.Create(&order)

	return c.JSON(order)
}
