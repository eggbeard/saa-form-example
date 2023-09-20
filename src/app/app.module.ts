import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AgeFormComponent } from './age-form/age-form.component';
import { MileageRangeComponent } from './mileage-range/mileage-range.component';

@NgModule({
  declarations: [
    AppComponent,
    AgeFormComponent,
    MileageRangeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
