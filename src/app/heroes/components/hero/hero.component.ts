import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'superman';
  public age: number = 30;

  get capitalizedName() {
    // get is used as a property
    return this.name.toUpperCase();
  }

  getHeroDescription() {
    // this is a method
    return `${this.name} is ${this.age} years old`;
  }

  changeHero() {
    this.name = 'batman';
  }

  changeAge() {
    this.age = 40;
  }
}
