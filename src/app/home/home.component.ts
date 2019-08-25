import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  recordingTime: Date = new Date();
  marvin = ' DATA SCIENTIST '
  name: string = '';  
  constructor() { }

   ngOnInit()    {  }
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
