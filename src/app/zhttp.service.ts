import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZhttpService {
  constructor(private http: HttpClient) { }
  myMethod() {  return console.log('Hey NO PEMBA Zhttp!, what is up!');  }
  getBeer() {  return this.http.get('https://api.openbrewerydb.org/breweries')  }
}
