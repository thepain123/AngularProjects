import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  danhSachSinhVien: any = [
    { ten: "Duc", tuoi: "21" },
    { ten: "Danh", tuoi: "19" },
    { ten: "Long", tuoi: "24" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
