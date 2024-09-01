import { flyweight, prototype, singleton, strategy } from "./design";
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
    pattern: "Strategy",
    type: Patterns.Behavioral,
    fn: strategy,
  },
];
