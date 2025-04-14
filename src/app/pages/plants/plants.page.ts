
  import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { 
  IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, 
  IonContent, IonButton, IonList, IonListHeader, IonLabel, IonItem 
} from '@ionic/angular/standalone';
import { Chart } from 'chart.js/auto';

interface Plant {
  name: string;
  growingConditions: string;
  maxHeight: number;
  isPerennial: boolean;
}

@Component({
  selector: 'app-plants',
  templateUrl: './plants.page.html',
  styleUrls: ['./plants.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle,
    IonContent, IonButton, IonList, IonListHeader, IonLabel, IonItem
  ]
})
export class PlantsPage {
  @ViewChild('heightChart') heightChartRef!: ElementRef;
  
  plants: Plant[] = [];
  groupedPlants: { [key: string]: Plant[] } = {};
  chart: any;
 
  apiUrl = 'https://api.jsonbin.io/v3/b/67fcfb5a8561e97a50ff4549';
  apiKey = '$2a$10$UX/07BYz7sVOwZOZ7Wk07.kybl8yRDmyCF54NU8D7ML6H4II0q/zS'; 



  constructor(private http: HttpClient) {}

  loadData() {
    const headers = { 
      'X-Master-Key': this.apiKey,
      'Content-Type': 'application/json'
    };

    this.http.get<any>(this.apiUrl, { headers }).subscribe({
      next: (response: any) => {
        this.plants = response.record.plants;
        this.groupPlants();
        this.createChart();
      },
      error: (err: any) => {
        console.error('Помилка завантаження даних:', err);
      }
    });
  }

  groupPlants() {
    this.groupedPlants = this.plants.reduce((groups, plant) => {
      const key = plant.growingConditions;
      groups[key] = groups[key] || [];
      groups[key].push(plant);
      return groups;
    }, {} as { [key: string]: Plant[] });
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = this.heightChartRef.nativeElement.getContext('2d');
    
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.plants.map(p => p.name),
        datasets: [{
          label: 'Максимальна висота (см)',
          data: this.plants.map(p => p.maxHeight),
          backgroundColor: this.plants.map(p => 
            p.isPerennial ? 'rgba(54, 162, 235, 0.6)' : 'rgba(255, 99, 132, 0.6)'
          ),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}