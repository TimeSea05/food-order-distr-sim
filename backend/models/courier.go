package models

import "fmt"

type Point struct {
	X uint
	Y uint
}

func (p *Point) String() string {
	return fmt.Sprintf("(%d, %d)", p.X, p.Y)
}

type Courier struct {
	Name        string
	Age         uint
	Credit      uint
	Position    string
	BlockID     int
	IsAvailable bool
}
