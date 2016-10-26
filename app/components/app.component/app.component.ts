import { Component }   from '@angular/core';

import { IHero }        from '../../models/hero';

// Temporarily const
const HEROES: IHero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app',
  templateUrl: './app/components/app.component/app.partial.html'
})

export class AppComponent {
  title: string;
  hero: IHero;

  heroes = HEROES;

  constructor() {
    this.title = 'Angular 2 - Tour of Heroes';
    this.hero = {
      id: 1,
      name: 'Windstorm'
    }
  }
}