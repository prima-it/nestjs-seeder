import {FixturePropRef} from "./fixture.ref";
import type {Faker} from "@faker-js/faker";

// Define the Generator based on Faker
type Generator = Faker;

// Factory Params definitions
type FactoryParams<Model, Type> = { generator: Generator; current: Model; reference: string, index?: number };

// Factory Types
export type FixturePropFactory<Model, Type = unknown> = (params: FactoryParams<Model, Type>) => Type | FixturePropRef;

// Fixture Definitions
export type FixtureDefinitionRefRange = { from: number, to: number };
export type FixtureDefinitionRefNamedRange = string[];
export type FixtureDefinition<Model> = {
    [Key in keyof Model]: Model[Key] | FixturePropFactory<Model, Model[Key]>
}

// Fixture Set and Fixtures
export type FixtureDefinitionSet<T> = ({ ref: string, definition: FixtureDefinition<T> } | {
    prefix: string,
    range: FixtureDefinitionRefRange | FixtureDefinitionRefNamedRange,
    definition: FixtureDefinition<T>
})[];

export type Fixtures<T = unknown> = { model: new () => T, definitions: FixtureDefinitionSet<T> };
