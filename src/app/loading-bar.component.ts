import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  template: `
    <p>
      loading-bar works!
    </p>
  `,
  styles: [
  ]
})
export class LoadingBarComponent implements OnInit {

  constructor() { }
  @Input() visable: boolean = false;
  ngOnInit(): void {
  }

}
