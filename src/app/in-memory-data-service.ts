import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Brood} from './brood';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const BROODJES: Brood[] = [

      { name: 'Atlantic', description: 'met grijze garnalen, plakjes zalm, heilbot, ei, komkommer en tomaat'},
      { name: 'Ham', description: 'met ham'},
      { name: 'Club Zalm', description: 'met kruidenkaas, gerookte zalm, tomaat en cressonette'},
      { name: 'Smos', description: 'met kaas, hesp, mayonaise en groentjes'},
      { name: 'Geitenkaas', description: 'met geitenkaas, honing, appeltjes en cressonette'},
      { name: 'Tonijn Pikant', description: 'met ansjovis, ui, tomaat en sla'},
      { name: 'Mix', description: 'met krabsalade, garnaalsalade, komkommer, wortel, tomaat en sla'},
      { name: 'Brie Zoet', description: 'met honing, walnoot, perzik en cressonette'},
      { name: 'Club Mozarella', description: 'met kaas, hesp, cocktail, ananas en groentjes'},
      { name: 'Kip Curry', description: 'met grijze garnalen, plakjes zalm, heilbot, ei, komkommer en tomaat'},
      { name: 'Club Tropical', description: 'met kaas, hesp, cocktail, ananas en groentjes'},
      { name: 'Kalkoenfilet', description: 'met kalkoenfilet, pesto, parmesan, tomaat en sla'},
      { name: 'Tonijnsalade', description: 'met tonijnsalade'},
      { name: 'Kanibal', description: 'met americain, kaas, hotsaus (pikant), verse ui en waterkers'}
    ]
    return {BROODJES};
  }
}
