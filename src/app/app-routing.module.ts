import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastreDoctorComponent } from './cadastre-doctor/cadastre-doctor.component';
import { CadastrePatientComponent } from './cadastre-patient/cadastre-patient.component';
import { CadastreComponent } from './cadastre/cadastre.component';

const routes: Routes = [
  {path: '', redirectTo: 'cadastre', pathMatch: 'full'},
  {path: 'cadastre', component: CadastreComponent},
  {path: 'cadastre-doctor', component: CadastreDoctorComponent},
  {path: 'cadastre-patient', component: CadastrePatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
