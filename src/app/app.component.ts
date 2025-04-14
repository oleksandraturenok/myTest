import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonItem, IonLabel, IonList, IonContent, IonTitle, IonToolbar, IonHeader } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
