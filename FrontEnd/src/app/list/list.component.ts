import { Component, OnInit } from '@angular/core';
import{ZhttpService}  from '../zhttp.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private _http: ZhttpService) { }

  brews: Object;
  nicosia = 'BLUE OPTIONS FOR SHOPPERS'
  nicosiaTime: Date = new Date();

  ngOnInit() {
    this._http.myMethod();
    this._http.getBeer().subscribe(data => {
      this.brews = data;  console.log(this.brews);
    });
  }
}