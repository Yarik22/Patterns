import {
  abstractFactory,
  composite,
  decorator,
  facade,
  factoryMethod,
  flyweight,
  iterator,
  observer,
  prototype,
  singleton,
  strategy,
  templateMethod,
} from "./design";
import { Patterns } from "./enums/Patterns";

export const patterns = [
  {
    pattern: "Singleton",
    type: Patterns.Creational,
    fn: singleton,
  },
  {
    pattern: "Prototype",
    type: Patterns.Creational,
    fn: prototype,
  },
  {
    pattern: "Factory Method",
    type: Patterns.Creational,
    fn: factoryMethod,
  },
  {
    pattern: "Abstract Factory",
    type: Patterns.Creational,
    fn: abstractFactory,
  },
  {
    pattern: "Flyweiht",
    type: Patterns.Structural,
    fn: flyweight,
  },
  {
    pattern: "Composite",
    type: Patterns.Structural,
    fn: composite,
  },
  {
    pattern: "Facade",
    type: Patterns.Structural,
    fn: facade,
  },
  {
    pattern: "Decorator",
    type: Patterns.Structural,
    fn: decorator,
  },
  {
    pattern: "Strategy",
    type: Patterns.Behavioral,
    fn: strategy,
  },
  {
    pattern: "Iterator",
    type: Patterns.Behavioral,
    fn: iterator,
  },
  {
    pattern: "Template Method",
    type: Patterns.Behavioral,
    fn: templateMethod,
  },
  {
    pattern: "Observer",
    type: Patterns.Behavioral,
    fn: observer,
  },
];
