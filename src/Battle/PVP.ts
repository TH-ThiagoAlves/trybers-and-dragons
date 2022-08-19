import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private Character1: Fighter, private Character2: Fighter) {
    super(Character1);
  }

  fight(): number {
    while (!(this.Character1.lifePoints === -1 
        || this.Character2.lifePoints === -1)) {
      this.Character1.attack(this.Character2);
      this.Character2.attack(this.Character1);
    }
    return this.Character1.lifePoints === -1 ? -1 : 1;
  }
}