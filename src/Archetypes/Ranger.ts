import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _maxLifePoints: number;
  private _energyType: EnergyType = 'stamina';
  static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._maxLifePoints = 99;
    Ranger._createdInstances += 1;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdArchetypeInstances(): number {
    return this._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}