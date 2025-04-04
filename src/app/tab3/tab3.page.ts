import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component'; 

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, HeaderComponent],  
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  matrixSize: number = 0;
  matrix: number[][] = [];
  sum: number = 0;

  // Функція для генерації матриці та обчислення суми елементів на парних рядках
  generateMatrix() {
    this.matrix = [];
    this.sum = 0;

    // Генерація матриці NxN
    for (let i = 0; i < this.matrixSize; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.matrixSize; j++) {
        this.matrix[i][j] = Math.floor(Math.random() * 10) + 1; // Генерація числа від 1 до 10
      }
    }

    // Обчислення суми елементів на парних рядках
    for (let i = 0; i < this.matrixSize; i++) {
      if (i % 2 === 0) {
        this.sum += this.matrix[i].reduce((acc, curr) => acc + curr, 0);
      }
    }
  }
}
