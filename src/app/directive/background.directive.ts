import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[bg]'
})
export class BackgroundDirective implements OnInit {
  nativeElement: HTMLElement;
  @Input('bg') color: string;

  constructor(private el: ElementRef) { 
    
  }

  ngOnInit(){
    this.nativeElement = this.el.nativeElement;
    this.nativeElement.style.backgroundColor = this.color;
    //console.log(this.color);
  }

  @HostListener('click') onclick() {
    console.log(this.nativeElement.style.backgroundColor);
  }

}
