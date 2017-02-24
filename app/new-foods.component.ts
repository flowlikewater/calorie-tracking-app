import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'new-foods',
  template: `
  <h1>Add Food</h1>
  <form style="width: 160px; height: 195px; position: absolute; left: 640px">
    <input #newFood placeholder="Food">
    <input #newDetails placeholder="Details">
    <input #newCalories placeholder="Calories">
    <input #newYear placeholder="Year" value={{printYear()}}>
    <input #newMonth placeholder="Month" value={{printMonth()}}>
    <input #newDay placeholder="Day" value={{printDay()}}>
    <input #newTime placeholder="Hour" value={{printHour()}}>
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

  printYear(){return this.year};
  printMonth(){return this.month};
  printDay(){return this.day};
  printHour(){return this.hour};

  addClicked(name: string,  details: string,  calories: number,  year: number,  month: number,  day: number ,  time: number) {
    var newFood: Food = new Food(name, details, calories, year, month, day, time);
    this.newFoodSender.emit(newFood);
  };
  date = new Date();
  year = this.date.getFullYear();
  month = this.date.getMonth();
  day = this.date.getDate();
  hour = this.date.getHours();
}
