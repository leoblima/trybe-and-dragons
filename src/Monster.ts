import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._strength = 63;
    this._lifePoints = 85;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    let newLifePoints:number = this._lifePoints;

    if (attackPoints > 0) {
      newLifePoints = this._lifePoints - attackPoints;
    }
    this._lifePoints = newLifePoints;
    if (newLifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;