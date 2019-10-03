import { Component, OnInit } from '@angular/core';
import{ZhttpService}  from '../zhttp.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  recordingTime: Date = new Date();
  marvin = 'LIST OF SHOPS FOR SHOTLISTING'
  name: string = '';  
  constructor(private _http: ZhttpService) { }
  pivot: Object;


   ngOnInit()    {   
    this._http.myMethod();
    this._http.getPivol().subscribe(data => {
      this.pivot = data;
      console.log(this.pivot);
    });}
  
   countClick()  { this.clickCounter += 1;  }
   dateStamper() { this.recordingTime       }
  
  setClasses() {
    let myClasses = 
    {
      active: this.clickCounter > 50,
      notactive: this.clickCounter <= 50
    };
    return myClasses;
  }

}
