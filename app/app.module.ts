import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ShowFoods } from './show-foods.component';
import { NewFoods } from './new-foods.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ShowFoods,
    NewFoods
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
