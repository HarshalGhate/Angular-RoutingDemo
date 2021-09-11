import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
  <h2>
    Inside Second Route
  </h2>
  `,
  styles: [
  ]
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
