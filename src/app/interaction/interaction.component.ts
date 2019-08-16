import { Component, OnInit,ViewChild } from '@angular/core';
import {ListMovieComponent} from './list-movie/list-movie.component'
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {


  @ViewChild(ListMovieComponent,{static:false}) tagListMovie: ListMovieComponent;// đã dom tới component
  constructor() { }
  AddMovie(_maPhim, _tenPhim, _giaPhim, _anhPhim) {
    const phim = {
      maPhim : _maPhim,
      tenPhim:_tenPhim,
      giaPhim:_giaPhim,
      hinhAnh:_anhPhim
    };
    this.tagListMovie.ThemPhim(phim);
    console.log(phim);
  }
  ngOnInit() {
  }

}
