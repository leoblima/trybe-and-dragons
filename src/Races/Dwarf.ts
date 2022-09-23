import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static totalCreated: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    if (!Dwarf.totalCreated) {
      Dwarf.totalCreated = 0;
    }
    Dwarf.totalCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Number(Dwarf.totalCreated);
  }
}

export default Dwarf;