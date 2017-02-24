import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'edit-foods',
  template: `
  <div *ngIf=selectedFood; style='display: inline;'>
    <h1>Edit Food</h1>
    <form style="width: 160px; height: 195px;">
      <input [(ngModel)] = "selectedFood.name" placeholder="Food" name="food">
      <input [(ngModel)] = "selectedFood.details" placeholder="Details" name="details">
      <input [(ngModel)] = "selectedFood.calories" placeholder="Calories" name="calories">
      <input [(ngModel)] = "selectedFood.year" placeholder="Year" name="year">
      <input [(ngModel)] = "selectedFood.month" placeholder="Month" name="month">
      <input [(ngModel)] = "selectedFood.day" placeholder="Day" name="day">
      <input [(ngModel)] = "selectedFood.time" placeholder="Hour" name="hour">
      <button (click)="doneClicked()">Done</button>
    </form>
  </div>
  `
})

export class EditFoods {
  @Input() selectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
