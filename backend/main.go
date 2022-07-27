package main

import (
	"github.com/TimeSea05/controllers"
	"github.com/TimeSea05/database"
	"github.com/TimeSea05/utilities"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	database.Connect()
	go func() {
		app := fiber.New()
		app.Use(cors.New(cors.Config{
			AllowCredentials: true,
		}))

		app.Post("/api/order", controllers.OrderLogger)
		app.Listen(":8000")
	}()

	utilities.RunProcessOrderTask()
}
