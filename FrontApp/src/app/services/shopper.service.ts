import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShopperService {
  constructor(private http: HttpClient) {}

  // API #1 search and serve
  myStart() {
    return console.log('Waiting for second API resource here!');
  }
  // API #2 search and serve
  getLocalCustomas() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
  // API #3 search and serve
  getInternationals() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
