import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { BaitapNgifComponent } from './baitap-ngif/baitap-ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';




@NgModule({
  declarations: [StructuralDirectiveComponent, NgIfComponent, BaitapNgifComponent, NgSwitchComponent, NgForComponent],
  exports:[StructuralDirectiveComponent],
  imports: [
    CommonModule
  ]
})
export class StructuralDirectiveModule { }
