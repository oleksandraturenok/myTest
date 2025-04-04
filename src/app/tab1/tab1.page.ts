import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, HeaderComponent], 
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  result: string = '';

  constructor() {}

  calculate() {
    // Перевірка умови для обчислення
    if (this.num1 > 10 || this.num2 > 10 || this.num3 > 10) {
      this.result = `Сума: ${this.num1 + this.num2 + this.num3}`;
    } else if (this.num1 % 2 !== 0 && this.num2 % 2 !== 0 && this.num3 % 2 !== 0) {
      this.result = `Добуток: ${this.num1 * this.num2 * this.num3}`;
    } else {
      this.result = 'Числа не відповідають умовам';
    }
  }
}
