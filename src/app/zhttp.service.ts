import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({  providedIn: 'root'})

export class ZhttpService {
  constructor(private http: HttpClient) { }

  // API #1 search and serve
  myMethod() {  return   console.log('Waiting for second API resource here!');  }
  // API #2 search and serve
  getBeer()  {  return this.http.get('https://api.openbrewerydb.org/breweries')  }
  // API #3 search and serve
  getPivol() {  return this.http.get('https://api.openbrewerydb.org/breweries')  }
  
}
