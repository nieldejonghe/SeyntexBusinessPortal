import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
/**
 * Simulates requests for development use
 */
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const broodjes = [
      { id: 1, name: 'Atlantic', description: 'met grijze garnalen, plakjes zalm, heilbot, ei, komkommer en tomaat'},
      { id: 2, name: 'Ham', description: 'met ham'},
      { id: 3, name: 'Club Zalm', description: 'met kruidenkaas, gerookte zalm, tomaat en cressonette'},
      { id: 4, name: 'Smos', description: 'met kaas, hesp, mayonaise en groentjes'},
      { id: 5, name: 'Geitenkaas', description: 'met geitenkaas, honing, appeltjes en cressonette'},
      { id: 6, name: 'Tonijn Pikant', description: 'met ansjovis, ui, tomaat en sla'},
      { id: 7, name: 'Mix', description: 'met krabsalade, garnaalsalade, komkommer, wortel, tomaat en sla'},
      { id: 8, name: 'Brie Zoet', description: 'met honing, walnoot, perzik en cressonette'},
      { id: 9, name: 'Club Mozarella', description: 'met kaas, hesp, cocktail, ananas en groentjes'},
      { id: 10, name: 'Kip Curry', description: 'met grijze garnalen, plakjes zalm, heilbot, ei, komkommer en tomaat'},
      { id: 11, name: 'Club Tropical', description: 'met kaas, hesp, cocktail, ananas en groentjes'},
      { id: 12, name: 'Kalkoenfilet', description: 'met kalkoenfilet, pesto, parmesan, tomaat en sla'},
      { id: 13, name: 'Tonijnsalade', description: 'met tonijnsalade'},
      { id: 14, name: 'Kanibal', description: 'met americain, kaas, hotsaus (pikant), verse ui en waterkers'}
    ];
    return {broodjes};
  }
}
