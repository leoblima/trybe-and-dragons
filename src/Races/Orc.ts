import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static totalCreated: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    if (!Orc.totalCreated) {
      Orc.totalCreated = 0;
    }
    Orc.totalCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Number(Orc.totalCreated);
  }
}

export default Orc;