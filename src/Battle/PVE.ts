import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(public Character: Fighter, private monsters: SimpleFighter[]) {
    super(Character);
  }

  fight(): number {
    while (this.Character.lifePoints > 0 && this.monsters
      .every((e) => e.lifePoints > 0)) {
      this.monsters.forEach((monster) => {
        this.Character.attack(monster);
        monster.attack(this.Character);
      });
    }

    return this.Character.lifePoints === -1 ? -1 : 1;
  }
}