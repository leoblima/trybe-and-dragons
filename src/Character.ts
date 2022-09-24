import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(
    name: string,
    race?: Race,
    archetype: Archetype = new Mage(name),
  ) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = race || new Elf(name, this._dexterity);
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._archetype = archetype;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    const { amount } = this._energy;
    return { type_: this._energy.type_, amount };
  }

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;
    let newLifePoints:number = this._lifePoints;

    if (damage > 0) {
      newLifePoints = this._lifePoints - damage;
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

  levelUp(): void {
    const increment = getRandomInt(1, 10);
    this._maxLifePoints += increment;
    this._strength += increment;
    this._dexterity += increment;
    this._defense += increment;
    this._energy.amount = 10;

    if (this._maxLifePoints >= this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * getRandomInt(1, this._dexterity));
  }
}

export default Character;