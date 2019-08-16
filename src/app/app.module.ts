import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap1HeaderComponent } from './baitap1/baitap1-header/baitap1-header.component';
import { BaitapContentComponent } from './baitap1/baitap-content/baitap-content.component';
import { BaitapSidebarComponent } from './baitap1/baitap-sidebar/baitap-sidebar.component';
import { BaitapFooterComponent } from './baitap1/baitap-footer/baitap-footer.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap2HeaderComponent } from './baitap2/baitap2-header/baitap2-header.component';
import { Baitap2CarouselComponent } from './baitap2/baitap2-carousel/baitap2-carousel.component';
import { Baitap2WhatwedoComponent } from './baitap2/baitap2-whatwedo/baitap2-whatwedo.component';
import { Baitap2ContactComponent } from './baitap2/baitap2-contact/baitap2-contact.component';
import { Baitap2ListcardComponent } from './baitap2/baitap2-listcard/baitap2-listcard.component';
import { Baitap2FooterComponent } from './baitap2/baitap2-footer/baitap2-footer.component';
import { Baitap2CardComponent } from './baitap2/baitap2-listcard/baitap2-card/baitap2-card.component';
import { Baitap3Module } from './baitap3/baitap3.module';
import { DataBidingModule } from './data-biding/data-biding.module';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module'
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module'
import { BaiTapThemSanPhamModule } from './bai-tap-them-san-pham/bai-tap-them-san-pham.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ItemCardComponent } from './ng-content/item-card/item-card.component';
import { InteractionModule } from './interaction/interaction.module';
import { DatVeXeModule } from './dat-ve-xe/dat-ve-xe.module'
@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1HeaderComponent,
    BaitapContentComponent,
    BaitapSidebarComponent,
    BaitapFooterComponent,
    Baitap2Component,
    Baitap2HeaderComponent,
    Baitap2CarouselComponent,
    Baitap2WhatwedoComponent,
    Baitap2ContactComponent,
    Baitap2ListcardComponent,
    Baitap2FooterComponent,
    Baitap2CardComponent,
    NgContentComponent,
    ItemCardComponent,


  ],
  imports: [
    BrowserModule,
    Baitap3Module,
    DataBidingModule,
    StructuralDirectiveModule,
    AttributeDirectiveModule,
    BaiTapThemSanPhamModule,
    InteractionModule,
    DatVeXeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
