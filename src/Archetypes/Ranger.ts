import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static totalCreated: number;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    if (!Ranger.totalCreated) {
      Ranger.totalCreated = 0;
    }
    Ranger.totalCreated += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.totalCreated;
  }
}

export default Ranger;