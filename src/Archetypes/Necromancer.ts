import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static totalCreated: number;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    if (!Necromancer.totalCreated) {
      Necromancer.totalCreated = 0;
    }
    Necromancer.totalCreated += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.totalCreated;
  }
}

export default Necromancer;