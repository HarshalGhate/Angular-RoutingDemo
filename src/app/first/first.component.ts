import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <h2>
        Inside First Route
    </h2>
  `,
  styles: [
  ]
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
