export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type_: EnergyType; // = 'mana' || 'stamina';
  amount: number;
}