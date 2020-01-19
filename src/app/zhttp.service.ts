import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({  providedIn: 'root'})

export class ZhttpService {
  constructor(private http: HttpClient) { }
  myMethod() {  return   console.log('Waiting for second API resource here!');  }
  getBeer()  {  return this.http.get('https://api.openbrewerydb.org/breweries')  }
  getPivol() {  return this.http.get('https://api.openbrewerydb.org/breweries')  }
  
}
