import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

// Components
import { AppComponent }     from './components/app.component/app.component';
import { HeroListComponet } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent }  from './components/heroes/heroes.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { HeroService }      from './services/hero.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroListComponet,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})

export class AppModule { }