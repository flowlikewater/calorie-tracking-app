import { Component, Input } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'show-foods',
  template: `
  <div *ngFor="let currentFood of childFoods">
    <h3> {{currentFood.name}} </h3>
    <h5> {{currentFood.calories}}   calories </h5>
    <h5> {{currentFood.year}}-{{currentFood.month}}-{{currentFood.day}}</h5>
    <h5> {{currentFood.time}}:00 </h5>
  </div>
  `
})


export class ShowFoods {
  @Input() childFoods: Food[];
}
