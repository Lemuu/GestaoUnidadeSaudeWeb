import { CadastreService } from './../services/cadastre/cadastre.service';
import { Component, OnInit } from '@angular/core';
import { Speciality } from '../models/speciality.model';

@Component({
  selector: 'app-cadastre-doctor',
  templateUrl: './cadastre-doctor.component.html',
  styleUrls: ['./cadastre-doctor.component.scss']
})
export class CadastreDoctorComponent implements OnInit {

  constructor(
    private service: CadastreService
  ) { }

  ngOnInit() {
  }

  get specialities() {
    return Speciality;
  }

}
