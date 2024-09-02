import { flyweight, prototype, singleton, strategy } from "./design";
import { iterator } from "./design/behavioral/Iterator";
import { composite } from "./design/structural/Composite";
import { AnsiColor } from "./enums/Colours";
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
    pattern: "Strategy",
    type: Patterns.Behavioral,
    fn: strategy,
  },
  {
    pattern: "Iterator",
    type: Patterns.Behavioral,
    fn: iterator,
  },
];
