import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static totalCreated: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    if (!Elf.totalCreated) {
      Elf.totalCreated = 0;
    }
    Elf.totalCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Number(Elf.totalCreated);
  }
}

export default Elf;