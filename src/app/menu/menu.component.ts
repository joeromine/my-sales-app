import { Component, OnInit } from '@angular/core';

interface menuItems {
  /**
  * Path that will be loaded
  */
  path: string;
  /**
   * text to display
   * */
  label: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  menuItems: Array<menuItems> = [
    {path: '/', label: 'Home'},
    {path: 'categories', label: 'Categories'},
    {path: '/suppliers', label: 'Suppliers'}
];

  ngOnInit(): void {

  }

}
