import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ParsedRequestUrl, RequestInfo, RequestInfoUtilities, ResponseOptions, STATUS, getStatusText} from "angular-in-memory-web-api";

import { User, Broodje } from '../models';

/**
 * Data
 */
const dataBroodjes: Broodje[] = [
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
const dataUsers: User[] = [
  { id: 1, username: 'admin', password: 'admin', email: 'admin@test.be', token: 'abc'}
];

@Injectable({
  providedIn: 'root'
})
/**
 * Simulates requests for development use
 */
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      broodjes:dataBroodjes,
      users: dataUsers
    };
  }
  // HTTP GET interceptor
  get(reqInfo: RequestInfo) {
    return undefined; // let the default GET handle all others
  }
  // HTTP PUT interceptor
  put(reqInfo: RequestInfo) {
    return undefined; // let the default GET handle all others
  }

  // HTTP POST interceptor
  post(reqInfo: RequestInfo) {
    const url = reqInfo.url;
    if (url === 'api/users/login') {

    }
    return undefined; // let the default GET handle all others
  }

  // HTTP DELETE interceptor
  delete(reqInfo: RequestInfo) {
    return undefined; // let the default GET handle all others
  }

  // Intercept ResponseOptions from default HTTP method handlers
  // Add a response header and report interception to console.log
  responseInterceptor(resOptions: ResponseOptions, reqInfo: RequestInfo) {
    return resOptions;
  }

  /**
   * Post Mocks
   */
  login(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      console.log('Login override');
      const users = dataUsers.slice();  // Copy
      const id = reqInfo.id;

      // tslint:disable-next-line:triple-equals
      const userData = reqInfo.utils.findById(users, id);
      const tokenData = {};
      const options: ResponseOptions = userData ?
        {
          body: this.wrapData(reqInfo, tokenData),
          status: STATUS.OK
        } :
        {
          body: { error: `'Villains' with id='${id}' not found` },
          status: STATUS.NOT_FOUND
        };
      return this.finishOptions(options, reqInfo);
    });
  }
  // Helpers
  private finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }
  private wrapData(reqInfo: RequestInfo, data: Object) {
    const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
    return dataEncapsulation ? { data } : data;
  }
}
