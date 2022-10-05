import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player1: Fighter;
  private _monsters: Fighter[] | SimpleFighter[];

  constructor(player1: Fighter, monsters: Fighter[] | SimpleFighter[]) {
    super(player1);
    this._player1 = player1;
    this._monsters = monsters;
  }

  private round(): number {
    this._player1.attack(this.player2);
    let result = this._player2.lifePoints;
    if (result <= 0) {
      return 1;
    }
    this._player2.attack(this._player1);
    result = this._player1.lifePoints;
    if (result <= 0) {
      return -1;
    }
    return 0;
  }

  fight(): number {
    const MAX_LIFE_POINTS = 100;

    
    for (let index = 0; index < MAX_LIFE_POINTS; index += 1) {
      const result = this.round();
      if (result !== 0) break;
    }
    return super.fight();
  }
}

export default PVP;