import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-biding',
  templateUrl: './baitap-biding.component.html',
  styleUrls: ['./baitap-biding.component.scss']
})
export class BaitapBidingComponent implements OnInit {

  constructor() { }
  email: string;
  fullName:string;
  ngOnInit() {
  }
  GetValueFromInput(value){
    this.fullName = value;
  }
}
