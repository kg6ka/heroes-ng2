import { Component, Input } from '@angular/core';

import { IHero }            from '../../models/hero';

@Component ({
  selector: 'hero-list',
  templateUrl: './app/components/hero-list/hero-list.partial.html'
})

export class HeroListComponet {
  @Input() heroes: IHero[];
}