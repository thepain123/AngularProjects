import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private Ele: ElementRef, private Render2 :Renderer2) { 
    // this.Ele.nativeElement.style.backgroundColor = "Yellowgreen" ;
    this.Render2.setStyle(this.Ele.nativeElement,'background-color','green');
  }
  @HostBinding('style.backgroundColor') bgColor:string = "red";
  @HostListener('mouseenter') HoverEvent (){
    this.Render2.setStyle(this.Ele.nativeElement,'background-color','Yellowgreen');
  }
  @HostListener('mouseleave') MouseLeaveEvent (){
    this.Render2.setStyle(this.Ele.nativeElement,'background-color','green');
  }
}
