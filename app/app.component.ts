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
  <br>
  <show-foods
    [childFoods]="foods"
    (clickSender)="showDetails($event)"
  ></show-foods>
  <total-calories
    [childFoods]="foods"
  ></total-calories>
  <new-foods
    (newFoodSender)="addFood($event)"
  ></new-foods>
  <edit-foods
    [selectedFood]="selectedFood"
    (doneClickedSender)="finishedEditing()"
  ></edit-foods>
  `
})

export class AppComponent {
  public foods: Food[] = [
    new Food("Greens", "These are high quality vegetables", 354, 2017, 2, 24, 8),
    new Food("Brownies", "Properly baked.", 365, 2017, 2, 24, 10),
    new Food("Mushrooms", "These are magical.", 100, 2017, 2, 24, 12),
    new Food("Coke", "This is a good drink.", 365, 2017, 2, 24, 14),
    new Food("Greens", "These are high quality vegetables", 354, 2017, 2, 23, 8),
    new Food("Brownies", "Properly baked.", 365, 2017, 2, 23, 10),
    new Food("Mushrooms", "These are magical.", 100, 2017, 2, 22, 12),
    new Food("Coke", "This is a good drink.", 365, 2017, 2, 22, 14),
  ];

  addFood(newFood: Food){
    this.foods.push(newFood);
  }
  selectedFood: Food = null;
  showDetails(clickedFood: Food){
    this.selectedFood = clickedFood;
  }
  finishedEditing(){
    this.selectedFood = null;
  }
}

// constructor(public name: string, public details: string, public calories: number, public date: Date, public time: number){};
