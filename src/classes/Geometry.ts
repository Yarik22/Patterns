export abstract class Shape {
  abstract calculateArea(): number;
}

export abstract class Volume extends Shape {
  abstract calculateVolume(): number;
}

export class Square extends Shape {
  constructor(protected side: number) {
    super();
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}

export class Rectangle extends Shape {
  constructor(protected width: number, protected height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

export class Sphere extends Volume {
  constructor(protected radius: number) {
    super();
  }

  calculateArea(): number {
    return 4 * Math.PI * this.radius ** 2;
  }

  calculateVolume(): number {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}

export class Parallelepiped extends Volume {
  constructor(
    protected width: number,
    protected height: number,
    protected depth: number
  ) {
    super();
  }

  calculateArea(): number {
    return (
      2 *
      (this.width * this.height +
        this.height * this.depth +
        this.depth * this.width)
    );
  }

  calculateVolume(): number {
    return this.width * this.height * this.depth;
  }
}

export class Cube extends Parallelepiped {
  constructor(protected side: number) {
    super(side, side, side);
  }

  calculateArea(): number {
    return 6 * Math.pow(this.width, 2);
  }

  calculateVolume(): number {
    return Math.pow(this.width, 3);
  }
}
