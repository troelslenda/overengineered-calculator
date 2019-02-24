import { Component } from '@angular/core';
//import { CalculatorService } from 'src/app/services/calculator.service';
import { CalculateService } from 'src/app/services/calculate.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  display: any;

  constructor(private calculateService: CalculateService) { }

  keyPressed(key) {
    this.display = this.calculateService.addKey(key);
  }
}
