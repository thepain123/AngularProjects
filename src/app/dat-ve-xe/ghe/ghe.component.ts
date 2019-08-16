import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {


  @Input() ghe;

  @Output() eventPick = new EventEmitter();
  trangThaiChon: boolean;
  daChonSan: boolean;
 
  ChonGhe() {
    if (!this.daChonSan) {
      this.trangThaiChon = !this.ghe.TrangThai;
      console.log(this.ghe.TrangThai);
      this.eventPick.emit(this.ghe)
      
    }
  }
  constructor() { }

  ngOnInit() {
    this.daChonSan = this.ghe.TrangThai;
    console.log(this.daChonSan);
    this.trangThaiChon = this.ghe.TrangThai;
  }


}
