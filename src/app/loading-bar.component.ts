import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  template: `
<div *ngIf="visable"
style="display: flex; justify-content: center; align-items: center; background: white;">
  <mat-progress-spinner
    color="primary"
    mode="indeterminate"
  ></mat-progress-spinner>
</div>
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
