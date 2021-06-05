import { Component, OnInit } from '@angular/core';
import { CadastreService } from '../services/cadastre/cadastre.service';

@Component({
  selector: 'app-cadastre',
  templateUrl: './cadastre.component.html',
  styleUrls: ['./cadastre.component.scss']
})
export class CadastreComponent implements OnInit {

  constructor(
    private service: CadastreService
  ) { }

  ngOnInit() {
  }

}
