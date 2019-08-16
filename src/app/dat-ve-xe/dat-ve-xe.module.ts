import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeXeComponent } from './dat-ve-xe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';



@NgModule({
  declarations: [DatVeXeComponent, DanhSachGheComponent, GheComponent],
  exports:[DatVeXeComponent],
  imports: [
    CommonModule
  ]
})
export class DatVeXeModule { }
