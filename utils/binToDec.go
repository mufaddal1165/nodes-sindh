package bintodec

import (
	"fmt"
)

func ToBin(dec byte) string {
	return fmt.Sprintf("%b", dec)
}


// the string will not exceed the byte
func ToDec(bin string) byte {
	l := len(bin)
	runes := []rune(bin)
	var total byte
	//48 ascii for 0 
	for i := 1; i <= l; i++ {
		total = byte((runes[l-i] - 48) << byte(i-1))
	}
	return total
}
