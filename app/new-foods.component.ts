import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'new-foods',
  template: `
  <h1>Add Food</h1>
  <form style="width: 160px; height: 195px;">
    <input #newFood placeholder="Food">
    <input #newDetails placeholder="Details">
    <input #newCalories placeholder="Calories">
    <input #newYear placeholder="Year">
    <input #newMonth placeholder="Month">
    <input #newDay placeholder="Day">
    <input #newTime placeholder="Hour">
    <button (click)="
      addClicked(newFood.value, newDetails.value, newCalories.value, newYear.value, newMonth.value, newDay.value, newTime.value);
      newFood.value='';
      newDetails.value='';
      newCalories.value='';
      newYear.value='';
      newMonth.value='';
      newDay.value='';
      newTime.value='';
    ">Add</button>
    </form>
  `
})

export class NewFoods {
  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string,  details: string,  calories: number,  year: number,  month: number,  day: number ,  time: number) {
    var newFood: Food = new Food(name, details, calories, year, month, day, time);
    this.newFoodSender.emit(newFood);
  }
}
