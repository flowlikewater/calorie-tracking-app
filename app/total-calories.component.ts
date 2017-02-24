import { Component, Input } from '@angular/core';
import { Food } from './food.model';
import { ShowFoods } from './show-foods.component';


@Component({
  selector: 'total-calories',
  template: `
  <h3>Total Calories at Chosen Date: {{addCal(childFoods, selectdate)}}</h3>
  `
})

export class TotalCalories {
  @Input() childFoods: Food[];
  totalCalories  = 0;
  addCal(thisFood, selecteddate){
    var totalCalories  = 0;

    for (var i = 0;i < thisFood.length; i++) {
      if (thisFood.day === selecteddate)
      totalCalories+=parseInt(thisFood[i].calories);
    }

    return totalCalories;
  }
}
