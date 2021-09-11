import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invalid',
  template: `
    <h2>
        Sorry.. Invalid Route
    </h2>
  `,
  styles: [
  ]
})
export class InvalidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
