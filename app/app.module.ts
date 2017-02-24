import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ShowFoods } from './show-foods.component';
import { NewFoods } from './new-foods.component';
import { EditFoods } from './edit-foods.component';
import { TotalCalories } from './total-calories.component';
import { DatePipe } from './date.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ShowFoods,
    NewFoods,
    EditFoods,
    TotalCalories,
    DatePipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
