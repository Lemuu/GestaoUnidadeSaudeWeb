import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastreDoctorComponent } from './cadastre-doctor/cadastre-doctor.component';
import { CadastrePatientComponent } from './cadastre-patient/cadastre-patient.component';

const routes: Routes = [
  {path: '', redirectTo: 'cadastre-patient', pathMatch: 'full'},
  {path: 'cadastre-patient', component: CadastrePatientComponent},
  {path: 'cadastre-doctor', component: CadastreDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
