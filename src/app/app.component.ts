import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonContent, IonList, IonItem, IonHeader, IonLabel } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonLabel, IonHeader, IonApp, IonRouterOutlet, IonMenu, IonContent, IonList, IonItem, RouterModule]
})
export class AppComponent {}