import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBidingComponent } from './data-biding.component';
import { OnewayBidingComponent } from './oneway-biding/oneway-biding.component';
import { TwowayBidingComponent } from './twoway-biding/twoway-biding.component';
import { from } from 'rxjs';
import {FormsModule} from "@angular/forms";
import { BaitapBidingComponent } from './baitap-biding/baitap-biding.component'


@NgModule({
  declarations: [DataBidingComponent, OnewayBidingComponent, TwowayBidingComponent, BaitapBidingComponent , ],
  exports:[DataBidingComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DataBidingModule { }
