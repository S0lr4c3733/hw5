class Square {
  side = 0;

  constructor(side) {
    this.side = side;
  }

  perimeter() {
    return this.side * 4;
  }

  area() {
    return Math.pow(this.side, 2);
  }

  diagonal() {
    return Math.sqrt(2 * Math.pow(this.side, 2));
  }

  describe() {
    console.log(
      `Square with side ${
        this.side
      } has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal().toFixed(3)}`,
    );
  }
}

const squares = [new Square(2), new Square(3), new Square(4)];
squares.forEach((square) => square.describe());
