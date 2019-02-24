import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeypadComponent } from './partials/keypad/keypad.component';
import { DisplayComponent } from './partials/display/display.component';
import { CalculatorComponent } from './views/calculator/calculator.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { FirestoreCalculationsService } from './services/firestore-calculations.service';
import { CalculationsComponent } from './partials/calculations/calculations.component';
import { CalculateService } from './services/calculate.service';

@NgModule({
  declarations: [
    AppComponent,
    KeypadComponent,
    DisplayComponent,
    CalculatorComponent,
    CalculationsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [CalculateService, FirestoreCalculationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
