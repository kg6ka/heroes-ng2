import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

// Components
import { AppComponent }     from './components/app.component/app.component';
import { HeroListComponet } from './components/hero-list/hero-list.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroListComponet
  ],
  bootstrap:    [
    AppComponent
  ]
})

export class AppModule { }