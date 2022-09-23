import Archetype from './Archetypes/Archetype';
import { EnergyType } from './Energy';

class ArchetypeChild extends Archetype {
  get energyType(): EnergyType {
    throw new Error('Method not implemented.');
  }
}
const archetype = new ArchetypeChild('ALoha');
console.log(archetype.cost, archetype.name, archetype.special);