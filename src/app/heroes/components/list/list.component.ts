import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroes: string[] = ['batman', 'superman', 'flash', 'green lantern'];
  public removedHero?: string;

  removeLastHero() {
    const removed = this.heroes.pop();
    this.removedHero = removed;
  }
}
