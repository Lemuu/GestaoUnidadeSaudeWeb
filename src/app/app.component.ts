import { Component } from '@angular/core';
import { CadastreService } from './services/cadastre/cadastre.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GestaoUnidadeSaude-web';

  constructor(
    private cadastreService: CadastreService
  ) { }

}
