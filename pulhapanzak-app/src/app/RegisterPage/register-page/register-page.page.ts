import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonLabel, IonInput, IonItem, IonText, IonButton} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, person, mailOpenOutline } from 'ionicons/icons'


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonLabel , IonButton ,  FormsModule, IonIcon, IonInput, IonItem, IonText]
})
export class RegisterPagePage {

  constructor() { 
    addIcons({arrowBack, person, mailOpenOutline})
  }

 

}
