import * as Geometry from "../../classes/Geometry";

export class Surface {
  public specifySphereSurface(radius: number): void {
    const sphere = new Geometry.Sphere(radius);
    const area = sphere.calculateArea();
    const volume = sphere.calculateVolume();
    const volumeToAreaRatio = area / volume;

    console.log(
      `Sphere with radius ${radius}: Area-to-Volume Ratio = ${volumeToAreaRatio}`
    );
    console.log(`Volume of sphere is ${volume}`);
  }
  public specifyParallelepipedSurface(
    width: number,
    height: number,
    depth: number
  ): void {
    const parallelepiped = new Geometry.Parallelepiped(width, height, depth);
    const area = parallelepiped.calculateArea();
    const volume = parallelepiped.calculateVolume();
    const volumeToAreaRatio = area / volume;

    console.log(
      `Parallelepiped with width ${width}, height ${height}, and depth ${depth}: Area-to-Volume Ratio = ${volumeToAreaRatio}`
    );
    console.log(`Volume of parallelepiped is ${volume}`);
  }
  public specifyCubeSurface(side: number): void {
    const cube = new Geometry.Cube(side);
    const area = cube.calculateArea();
    const volume = cube.calculateVolume();
    const volumeToAreaRatio = area / volume;
    console.log(
      `Cube with side ${side}: Area-to-Volume Ratio = ${volumeToAreaRatio}`
    );
    console.log(`Volume of cube is ${volume}`);
  }
}

export const facade = () => {
  const surface = new Surface();
  surface.specifySphereSurface(2.8795);
  surface.specifyParallelepipedSurface(2, 5, 10);
  surface.specifyCubeSurface(4.642);
};
