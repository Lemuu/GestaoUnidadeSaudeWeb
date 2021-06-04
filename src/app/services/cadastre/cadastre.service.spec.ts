/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CadastreService } from './cadastre.service';

describe('Service: Cadastre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastreService]
    });
  });

  it('should ...', inject([CadastreService], (service: CadastreService) => {
    expect(service).toBeTruthy();
  }));
});
