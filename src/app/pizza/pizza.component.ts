import { Component, OnInit, Input } from '@angular/core';
import Pizza from '../model/pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input() pizza: Pizza;
  @Input() selected: boolean = false;
  isHidden = false ;

  constructor() {
  }

  ngOnInit() {
  }

  hidePrice(event: Event):void {
    event.stopPropagation();
    this.isHidden = !this.isHidden;
  };

}
