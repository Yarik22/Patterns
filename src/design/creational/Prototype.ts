interface Plant {
  clone(): Plant;
  size(): number;
}

class PlantA implements Plant {
  constructor(private a: number, private b: number) {}
  clone(): Plant {
    return new PlantA(this.a, this.b);
  }
  size(): number {
    return this.a * this.b;
  }
}
class PlantB implements Plant {
  constructor(private a: number, private b: number, private z: number) {}
  clone(): Plant {
    return new PlantB(this.a, this.b, this.z);
  }
  size(): number {
    return this.a * this.b * this.z;
  }
}

export const prototype = () => {
  const plantA = new PlantA(5, 10);
  const plantAClone = plantA.clone();

  console.log(`Original PlantA size: ${plantA.size()}`);
  console.log(`Cloned PlantA size: ${plantAClone.size()}`);
  console.log(`PlantA === Cloned PlantA: ${plantAClone === plantA}`);

  const plantB = new PlantB(5, 10, 10);
  const plantBClone = plantB.clone();

  console.log(`Original plantB size: ${plantB.size()}`);
  console.log(`Cloned plantB size: ${plantBClone.size()}`);
  console.log(`plantB === Cloned plantB: ${plantBClone === plantB}`);
};
