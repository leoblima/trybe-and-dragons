import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static totalCreated: number;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    if (!Mage.totalCreated) {
      Mage.totalCreated = 0;
    }
    Mage.totalCreated += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;