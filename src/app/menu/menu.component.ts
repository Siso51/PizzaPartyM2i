import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isOpen: boolean = false;
  @Input() title: string;
  @Output() menuChange: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit() {
  }

  showMenu(){
    this.isOpen = !this.isOpen;
  }

  changeRoute(route, newTitle){
      this.router.navigate([route]);
      this.menuChange.emit(newTitle);
  }

}
