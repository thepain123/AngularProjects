import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-biding',
  templateUrl: './oneway-biding.component.html',
  styleUrls: ['./oneway-biding.component.scss']
})
export class OnewayBidingComponent implements OnInit {
  name: string = "CyberSoft";
  valueOfInput : string;
  constructor() { }
  EventBiding(thamso) {
    console.log("thamso");
    this.valueOfInput = thamso;
  }
  ngOnInit() {
  }

}
