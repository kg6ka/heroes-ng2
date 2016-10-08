import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

// Components
import { AppComponent }     from './components/app.component/app.component';
import { HeroListComponet } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService }      from './services/hero.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroListComponet,
    HeroDetailComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})

export class AppModule { }