import { Component, OnInit } from '@angular/core';
import { ShopperService } from '../services/shopper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  prahaTime: Date = new Date();
  marvin = 'Local customers'
  name: string = '';  
  constructor(private _http: ShopperService) { }
  pivot!: any;


 ngOnInit()    {   
    this._http.myStart();
    this._http.getLocalCustomas().subscribe(data => {
      this.pivot = data;     
      console.log('=========|HOME|========');
       console.log(this.pivot);
    });}
  
   countClick()  { this.clickCounter += 1; }
   dateStamper() { this.prahaTime          }
  
  setClasses() {
    let myClasses = 
    {
      active: this.clickCounter > 50,
      notactive: this.clickCounter <= 50
    };
    return myClasses;
  }
}