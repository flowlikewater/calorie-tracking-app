import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'show-foods',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="100">Show All</option>
    <option value="22">Show 2 Days Ago</option>
    <option value="23">Show Yesterday</option>
    <option value="24" selected="selected">Show Today</option>
  </select>
  <br>
  <br>
  <div *ngFor="let currentFood of childFoods | date : selectdate" style='display: inline-block; width: 150px; border: 1px solid black; border-radius: 10px; margin: 20px; text-align: center'>
    <h3> {{currentFood.name}} </h3>
    <h5> {{currentFood.calories}}   calories </h5>
    <h5> {{currentFood.year}}-{{currentFood.month}}-{{currentFood.day}}</h5>
    <h5> {{currentFood.time}}:00 </h5>
    <button (click)="editButtonClicked(currentFood)"
    >Edit</button>
    <br>
    <br>
  </div>
  `
})

export class ShowFoods {
  @Input() childFoods: Food[];
  @Output() clickSender = new EventEmitter();

  public selectdate: number = 24;
  onChange(optionFromMenu) {
    this.selectdate = optionFromMenu;
    console.log(this.selectdate);
  }

  editButtonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
