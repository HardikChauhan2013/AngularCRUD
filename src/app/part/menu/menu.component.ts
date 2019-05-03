import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  currentUser = null;

  cardItemCount = 0;

  constructor() { }

  ngOnInit() {
  }

}
