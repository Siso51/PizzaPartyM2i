import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  observeDate: Observable<any> = Observable.interval(1000).map(() => Date.now());
  date: string;
  title: string = 'PizzaParty';

  constructor() {
  }

  ngOnInit() {
    //setInterval(() => this.date = Date.now(), 1000);
    this.observeDate.subscribe((date) =>this.date = date);
  }

  changeTitle(title){
    this.title = title;
  }
}
