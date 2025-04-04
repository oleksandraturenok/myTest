import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Імпортуємо IonicModule

@Component({
  selector: 'app-header',
  standalone: true, // Оголошуємо компонент як standalone
  imports: [IonicModule], // Додаємо IonicModule для доступу до ion-header
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {
  studentName = 'Туренок Олександра Олексіївна';
  group = 'АнД-31';
  variant = '16';
}
