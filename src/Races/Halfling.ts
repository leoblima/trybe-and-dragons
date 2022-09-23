import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static totalCreated: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    if (!Halfling.totalCreated) {
      Halfling.totalCreated = 0;
    }
    Halfling.totalCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Number(Halfling.totalCreated);
  }
}

export default Halfling;