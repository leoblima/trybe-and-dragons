import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static totalCreated: number;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    if (!Warrior.totalCreated) {
      Warrior.totalCreated = 0;
    }
    Warrior.totalCreated += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.totalCreated;
  }
}

export default Warrior;