package utilities

import (
	"fmt"
	"math"
	"strconv"
)

func genPosition(x, y int) string {
	return fmt.Sprintf("(%d, %d)", x, y)
}

// Position string: `(x, y)`
func parsePosition(position string) (int, int) {
	var commaPos int

	for commaPos = 0; position[commaPos] != ',' && commaPos < len(position); commaPos++ {
	}
	if commaPos == len(position) {
		// cannot find `,`
		panic("Position string format is not correct!")
	}

	x, err1 := strconv.Atoi(position[1:commaPos])
	y, err2 := strconv.Atoi(position[commaPos+2 : len(position)-1])
	if err1 != nil || err2 != nil {
		panic("Position string format is not correct!")
	}

	return x, y
}

func updatePosition(courierPosPtr *string, orderPos string) {
	courierX, courierY := parsePosition(*courierPosPtr)
	orderX, orderY := parsePosition(orderPos)

	// suppose the courier will first take the X direction
	// then the Y direction
	switch {
	case courierX < orderX:
		courierX += 1
	case courierX > orderX:
		courierX -= 1
	case courierX == orderX && courierY < orderY:
		courierY += 1
	case courierX == orderX && courierY > orderY:
		courierY -= 1
	case courierX == orderX && courierY == orderY:
		fmt.Println("Courier has arrived at the user's position")
	default:
		panic("Unknown error happened when comparing the position of user and courier")
	}

	*courierPosPtr = genPosition(courierX, courierY)
}

func mapPosToBlockID(position string) int {
	x, y := parsePosition(position)
	return (x/20)*5 + y/20
}

// When calculating the distance between 2 positions,
// we suppose that the courier can not move diagonally
func calcDist(pos1, pos2 string) int {
	x1, y1 := parsePosition(pos1)
	x2, y2 := parsePosition(pos2)

	return int(math.Abs(float64(x1)-float64(x2)) + math.Abs(float64(y1)-float64(y2)))
}
