import { Component, OnInit } from '@angular/core';
import { ShopperService } from '../services/shopper.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private _http: ShopperService) {}

  brews!: any;
  nicosia = 'International customers';
  nicosiaTime: Date = new Date();

  ngOnInit() {
    this._http.myStart();
    this._http.getLocalCustomas().subscribe((data) => {
      this.brews = data;
      console.log('=========|LISTING|========');
      console.log(this.brews);
    });
  }
}
