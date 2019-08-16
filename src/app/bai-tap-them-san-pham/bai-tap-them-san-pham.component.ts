import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-them-san-pham',
  templateUrl: './bai-tap-them-san-pham.component.html',
  styleUrls: ['./bai-tap-them-san-pham.component.scss']
})
export class BaiTapThemSanPhamComponent implements OnInit {

  constructor() { }




  danhSachSanPham: any = [];
  ThemSanPham(code, name, cost) {
    let SanPham = {
      itemCode: code,
      itemName: name,
      itemCost: cost,
    }
    this.danhSachSanPham.push(SanPham);
    localStorage.setItem("item", JSON.stringify(this.danhSachSanPham));
    console.log(this.danhSachSanPham)
  }
  ngOnInit() {
    if (localStorage.getItem("item")) {
      this.danhSachSanPham = JSON.parse(localStorage.getItem("item"));
    }

  }

}
