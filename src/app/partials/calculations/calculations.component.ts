import { Component, OnInit } from '@angular/core';
import { FirestoreCalculationsService } from 'src/app/services/firestore-calculations.service';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent {
  public calculations;

  constructor(firestoreCalculationsService: FirestoreCalculationsService) {
    this.calculations = firestoreCalculationsService.loadCalculations();
  }
}
