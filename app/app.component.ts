// A component has two halves: An annotation and a class definition.
// App Component is my ROOT Component - responsible for holding all of our data (our models), and for loading child components.

import { Component } from '@angular/core';
import { Food } from './food.model';
import { ShowFoods } from './show-foods.component';
import { NewFoods } from './new-foods.component'

@Component({
  selector: 'my-app',
  template: `
  <h1>Calorie Tracking App</h1>
  <show-foods
    [childFoods]="foods"
  ></show-foods>
  <new-foods
    (newFoodSender)="addFood($event)"
  ></new-foods>
  `
})

export class AppComponent {
  public foods: Food[] = [
    new Food("Hamburger", "Didn't get a soda or cheese on my burger!", 354, 2017, 2, 24, 8),
    new Food("Fries", "I only ate half of them.", 365, 2017, 2, 24, 10)
  ];
  addFood(newFood: Food){
    this.foods.push(newFood);
  }
}

// constructor(public name: string, public details: string, public calories: number, public date: Date, public time: number){};
