import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapThemSanPhamComponent } from './bai-tap-them-san-pham.component';



@NgModule({
  declarations: [BaiTapThemSanPhamComponent],
  exports:[BaiTapThemSanPhamComponent],
  imports: [
    CommonModule
  ]
})
export class BaiTapThemSanPhamModule { }
