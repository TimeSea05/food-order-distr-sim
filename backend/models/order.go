package models

import "fmt"

type Order struct {
	ID        int64
	Username  string `json:"username"`
	OrderList string `json:"orderlist"`
	Price     string `json:"price"`
	Position  string `json:"position"`
}

func (order *Order) String() string {
	return fmt.Sprintf(
		"{username: %s, orderlist: %s, price: %s, position: %s }",
		order.Username, order.OrderList,
		order.Price, order.Position,
	)
}
