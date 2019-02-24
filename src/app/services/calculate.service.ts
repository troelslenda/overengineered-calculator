import { Injectable } from '@angular/core';
import { FirestoreCalculationsService } from './firestore-calculations.service';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  operator = '';
  left = '';
  right = '';
  calculation = '';

  constructor(
    private firestoreCalculationsService: FirestoreCalculationsService
  ) {}

  public addKey(key: any) {
    switch (key) {
      case '=':
        const result = eval(this.left + this.right);

        console.log('calcu', this.calculation);
        this.firestoreCalculationsService.saveCalculation(
          this.calculation,
          result
        );
        this.calculation = result;
        this.left = result;
        this.right = '';
        this.operator = '';

        return result;
        break;
      case '+/-':
        /*this.right = this.right.charAt(0) !== '-' ? '-' + this.right : this.right.slice(1);
        this.calculation = this.left + this.right;
        return this.right;*/
        break;
      case 'ac':
        this.left = '';
        this.right = '';
        this.operator = '';
        this.calculation = '';
        break;
      case '*':
      case '/':
      case '+':
      case '-':
        this.operator = key;
        return this.right;
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        if (this.operator) {
          console.log('here', this.left, this.right, this.operator);
          this.calculation += this.operator;
          console.log('calcu', this.calculation);
          this.left = this.left + this.right + this.operator;
          this.operator = '';
          this.right = '';
        }
        this.calculation += key;
        console.log('calcu', this.calculation);
        this.right += key;

        return this.right;
        break;
    }
  }
}
