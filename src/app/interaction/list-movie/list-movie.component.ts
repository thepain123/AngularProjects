import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MovieComponent } from './../movie/movie.component'
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  constructor() { }
  @ViewChildren(MovieComponent) tagListMovieItem: QueryList<MovieComponent>;
  danhSachPhim = [
    { maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh: "assets/images/minions.jpg" },
    { maPhim: 2, tenPhim: "Home", gia: "85000", hinhAnh: "assets/images/home.jpg" },
    { maPhim: 3, tenPhim: "Harvie", gia: "85000", hinhAnh: "assets/images/harvie.jpg" },
    { maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh: "assets/images/insideout.jpg" },
  ];
  danhSachLike = [
    { maPhim: 1, tenPhim: "Minions", soLike: 0 },
    { maPhim: 2, tenPhim: "Home", soLike: 0 },
    { maPhim: 3, tenPhim: "Harvie", soLike: 0 },
    { maPhim: 4, tenPhim: "Insideout", soLike: 0 },
  ];
  Like(movieFromChild) {
    // for(let item of this.danhSachLike){
    //   if(movieFromChild.tenPhim === item.tenPhim){
    //     item.soLike += 1;
    //   }
    // }
    // this.danhSachLike.map(item => {
    //   if (movieFromChild.maPhim === item.maPhim) {
    //     item.soLike += 1;
    //   }
    // })//////////////c1

    ///////////////////c2
    let movie = this.danhSachLike.find(item => {
      return item.maPhim === movieFromChild.maPhim;
    })
    movie.soLike++;
  }

  ThemPhim(phim) {
    this.danhSachPhim.push(phim);
    console.log(this.danhSachPhim);
  }
  ModifyCost() {
    this.tagListMovieItem.map(item => {
      if (item.phim.tenPhim === "Home") {
        item.phim.gia = 100000;
      }

    })
  }
  ngOnInit() {
  }

}
