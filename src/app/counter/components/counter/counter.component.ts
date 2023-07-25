import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button
      class="btn btn-primary"
      (click)="decreaseBy(1)"
      [disabled]="counter === 0"
    >
      -1
    </button>
    <button class="btn btn-primary" (click)="increaseBy(1)">+1</button>

    <button
      class="btn btn-primary"
      (click)="reset()"
      [disabled]="counter === 0"
    >
      reset
    </button>
  `,
})
export class CounterComponent {
  public counter = 0;
  constructor() {}

  increaseBy(value: number): void {
    this.counter += value;
  }
  decreaseBy(value: number): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 0;
  }
}
