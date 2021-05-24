import { Component, EventEmitter, OnInit } from '@angular/core';
import { Produto } from './Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tutorialWebservice';
  produto: Produto;

  save: EventEmitter<void> = new EventEmitter();
  cancel: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    this.save.subscribe(() => this.produto = null);
  }
}
