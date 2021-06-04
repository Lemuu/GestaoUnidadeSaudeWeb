import { CadastreService } from './../services/cadastre/cadastre.service';
import { Address } from './../models/address.model';
import { People } from './../models/people.model';
import { Component, OnInit } from '@angular/core';
import { CPF } from '../models/cpf.model';
import { Sex } from '../models/sex.model';
import { Phone } from '../models/phone.model';
import { Router } from '@angular/router';

type NewType = Address;

@Component({
  selector: 'app-cadastre-patient',
  templateUrl: './cadastre-patient.component.html',
  styleUrls: ['./cadastre-patient.component.scss']
})
export class CadastrePatientComponent implements OnInit {

  name: string;
  nameMother: string;
  CPF: CPF;
  sex: Sex;
  dateBorn: Date;
  phone: Phone;
  address: Address;

  constructor(
    private service: CadastreService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastre() {
    const people: People = {
      name: this.name,
      nameMother: this.nameMother,
      CPF: this.CPF,
      sex: this.sex,
      dateBorn: this.dateBorn,
      phone: this.phone,
      address: this.address
    }
    this.service.post(people);
    this.router.navigateByUrl('/');
  }

}
