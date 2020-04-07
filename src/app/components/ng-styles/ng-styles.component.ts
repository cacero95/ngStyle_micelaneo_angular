import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-styles',
  template: `
    <p [ngStyle]="{'font-size': '20px'}">
      Hola mundo... this is html element 
    </p>
  `,
  styles: []
})
export class NgStylesComponent implements OnInit {

  
  constructor() { }
  ngOnInit() {
  }

}
