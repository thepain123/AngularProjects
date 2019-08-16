import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap3Component } from './baitap3.component';
import { Baitap3HeaderComponent } from './baitap3-header/baitap3-header.component';
import { Baitap3ContentComponent } from './baitap3-content/baitap3-content.component';
import { Baitap3SideBarComponent } from './baitap3-side-bar/baitap3-side-bar.component';
import { Baitap3FooterComponent } from './baitap3-footer/baitap3-footer.component';



@NgModule({
  declarations: [Baitap3Component, Baitap3HeaderComponent, Baitap3ContentComponent, Baitap3SideBarComponent, Baitap3FooterComponent],
  exports:[Baitap3Component, Baitap3HeaderComponent, Baitap3ContentComponent, Baitap3SideBarComponent, Baitap3FooterComponent],
  imports: [
    CommonModule
  ]
})
export class Baitap3Module { }
