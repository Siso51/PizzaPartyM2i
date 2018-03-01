import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdownToggle]'
})
export class DropdownDirective implements OnInit {
  nativeElement:HTMLElement;
  nodeParentElement:HTMLElement;
  dropdownElement:Element;
  classShow: string = "show";

  constructor(private element:ElementRef) { }

  ngOnInit(){
    this.nativeElement = this.element.nativeElement;
    this.nodeParentElement = this.nativeElement.parentElement;
    this.dropdownElement = this.nodeParentElement.lastElementChild;

    this.dropdownElement.classList.add(this.classShow);
  }

  @HostListener("click", ['$event']) onclick(e: Event){
    e.preventDefault();

    if(this.dropdownElement.classList.contains(this.classShow)){
      this.dropdownElement.classList.remove(this.classShow);
    } else {
      this.dropdownElement.classList.add(this.classShow);
    }
  }
}
