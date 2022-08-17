import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._createdInstances += 1;
  }

  get name(): string {
    return this.name;
  }

  static createdArchetypeInstances(): number {
    return this._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
