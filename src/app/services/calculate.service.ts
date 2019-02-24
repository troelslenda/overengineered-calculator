import { Injectable } from "@angular/core";
import { FirestoreCalculationsService } from "./firestore-calculations.service";

@Injectable({
  providedIn: "root"
})
export class CalculateService {
  operator: string = "";
  left: string = "";
  right: string = "";
  calculation: string = "";

  constructor(
    private firestoreCalculationsService: FirestoreCalculationsService
  ) {}

  public addKey(key: any) {
    console.log(key);
    console.log(this.calculation);
    switch (key) {
      case "=":
        const result = eval(this.left + this.right);
        this.right = result;
        this.left = "";

        this.firestoreCalculationsService.saveCalculation(
          this.calculation,
          result
        );
        this.calculation = "";
        return result;
        break;
      case "+/-":
        /*this.right = this.right.charAt(0) !== '-' ? '-' + this.right : this.right.slice(1);
        this.calculation = this.left + this.right;
        return this.right;*/
        break;
      case "ac":
        this.left = "";
        this.right = "";
        this.operator = "";
        this.calculation = "";
        break;
      case "*":
      case "/":
      case "+":
      case "-":
        if (this.right !== "") {
          this.operator = key;
        }
        return this.right;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
        if (this.operator) {
          this.calculation += this.operator;
          this.left = this.left + this.right + this.operator;
          this.operator = "";
          this.right = "";
        }
        this.calculation += key;
        this.right += key;

        return this.right;
        break;
    }
  }
}
