import {
  abstractFactory,
  adapter,
  bridge,
  builder,
  chainOfResponsibility,
  command,
  composite,
  decorator,
  facade,
  factoryMethod,
  flyweight,
  interpreter,
  iterator,
  mediator,
  memento,
  nullObject,
  observer,
  prototype,
  proxy,
  singleton,
  state,
  strategy,
  templateMethod,
  visitor,
} from "../design";
import { Patterns, PatternTypes } from "../enums/Patterns";

export const patterns = [
  {
    pattern: Patterns.Singleton,
    type: PatternTypes.Creational,
    fn: singleton,
  },
  {
    pattern: Patterns.Prototype,
    type: PatternTypes.Creational,
    fn: prototype,
  },
  {
    pattern: Patterns.FactoryMethod,
    type: PatternTypes.Creational,
    fn: factoryMethod,
  },
  {
    pattern: Patterns.AbstractFactory,
    type: PatternTypes.Creational,
    fn: abstractFactory,
  },
  {
    pattern: Patterns.Builder,
    type: PatternTypes.Creational,
    fn: builder,
  },
  {
    pattern: Patterns.Flyweight,
    type: PatternTypes.Structural,
    fn: flyweight,
  },
  {
    pattern: Patterns.Composite,
    type: PatternTypes.Structural,
    fn: composite,
  },
  {
    pattern: Patterns.Facade,
    type: PatternTypes.Structural,
    fn: facade,
  },
  {
    pattern: Patterns.Decorator,
    type: PatternTypes.Structural,
    fn: decorator,
  },
  {
    pattern: Patterns.Adapter,
    type: PatternTypes.Structural,
    fn: adapter,
  },
  {
    pattern: Patterns.Bridge,
    type: PatternTypes.Structural,
    fn: bridge,
  },
  {
    pattern: Patterns.Proxy,
    type: PatternTypes.Structural,
    fn: proxy,
  },
  {
    pattern: Patterns.Strategy,
    type: PatternTypes.Behavioral,
    fn: strategy,
  },
  {
    pattern: Patterns.Iterator,
    type: PatternTypes.Behavioral,
    fn: iterator,
  },
  {
    pattern: Patterns.TemplateMethod,
    type: PatternTypes.Behavioral,
    fn: templateMethod,
  },
  {
    pattern: Patterns.Observer,
    type: PatternTypes.Behavioral,
    fn: observer,
  },
  {
    pattern: Patterns.Command,
    type: PatternTypes.Behavioral,
    fn: command,
  },
  {
    pattern: Patterns.Mediator,
    type: PatternTypes.Behavioral,
    fn: mediator,
  },
  {
    pattern: Patterns.Memento,
    type: PatternTypes.Behavioral,
    fn: memento,
  },
  {
    pattern: Patterns.State,
    type: PatternTypes.Behavioral,
    fn: state,
  },
  {
    pattern: Patterns.Visitor,
    type: PatternTypes.Behavioral,
    fn: visitor,
  },
  {
    pattern: Patterns.Interpreter,
    type: PatternTypes.Behavioral,
    fn: interpreter,
  },
  {
    pattern: Patterns.NullObject,
    type: PatternTypes.Behavioral,
    fn: nullObject,
  },
  {
    pattern: Patterns.ChainOfResponsibility,
    type: PatternTypes.Behavioral,
    fn: chainOfResponsibility,
  },
];
