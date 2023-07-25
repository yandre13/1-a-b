import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/components/counter/counter.component';
// import { HeroComponent } from './heroes/components/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
