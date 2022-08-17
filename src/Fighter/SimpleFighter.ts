import Energy from '../Energy';

export default interface SimpleFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: SimpleFighter): void;
  special?(enemy: SimpleFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}