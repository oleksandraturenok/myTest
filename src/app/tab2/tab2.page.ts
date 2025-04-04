import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';  

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, HeaderComponent],  
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  a: number = 0; 
  b: number = 100; 
  numbers: number[] = []; // Масив чисел, що підходять під умови
  sum: number = 0; 

  constructor() {}

  // Функція для перевірки першої цифри числа
  getFirstDigit(num: number): number {
    while (num >= 10) {
      num = Math.floor(num / 10);
    }
    return num;
  }

  // Обчислення чисел, які кратні 8 і мають парну першу цифру
  calculateNumbers() {
    this.numbers = [];
    this.sum = 0;

    for (let i = this.a; i <= this.b; i++) {
      if (i % 8 === 0) {
        const firstDigit = this.getFirstDigit(i);
        if (firstDigit % 2 === 0) {
          this.numbers.push(i);
          this.sum += i;
        }
      }
    }
  }
}