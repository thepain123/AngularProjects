import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() phim;
  @Output() eventLike = new EventEmitter();
  BuffLike(){
    //console.log(this.phim);
    this.eventLike.emit(this.phim);
  }
  constructor() { }

  ngOnInit() {
  }

}
