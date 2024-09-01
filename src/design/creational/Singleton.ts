import { Square } from "../../classes/Geometry";

export class Singleton {
  private static instance: Singleton;
  private square: Square;
  private constructor(square: Square) {
    this.square = square;
  }

  public static getInstance(square: Square): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(square);
    }
    return Singleton.instance;
  }

  public getSquare(): Square {
    return this.square;
  }
}

export const singleton = () => {
  const squareInstance = new Square(5);
  const singleton1 = Singleton.getInstance(squareInstance);

  const newSquareInstance = new Square(10);
  const singleton2 = Singleton.getInstance(newSquareInstance);

  console.log(
    `new Square(5).Area=${singleton1
      .getSquare()
      .calculateArea()}\nnew Square(10).Area=${singleton2
      .getSquare()
      .calculateArea()}\nEquality of two objects of singlote class is ${
      singleton1 === singleton2
    }`
  );
};
