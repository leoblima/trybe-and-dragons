import Archetype, { Mage } from "./Archetypes";
import Energy from "./Energy";
import Fighter from "./Fighter";
import Race from "./Races";
import getRandomInt from "./utils";

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

  constructor(name: string, race: Race, archetype: Archetype = new Mage(name)) {
    this._name = name;
    this._race = race;

    this._dexterity = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);

    this._archetype = archetype;
    this._maxLifePoints = race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: archetype.energyType,
      amount: getRandomInt(1, 10),
    };

    if (this._race.maxLifePoints === 99) {
      this._dexterity = this._race.dexterity;
    }
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
    const retEnergy = this._energy;
    return retEnergy;
  }
}