import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastreDoctorComponent } from './cadastre-doctor/cadastre-doctor.component';
import { CadastrePatientComponent } from './cadastre-patient/cadastre-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrePatientComponent,
    CadastreDoctorComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
