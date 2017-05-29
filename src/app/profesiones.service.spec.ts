import { TestBed, inject } from '@angular/core/testing';

import { ProfesionesService } from './profesiones.service';

describe('ProfesionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfesionesService]
    });
  });

  it('should ...', inject([ProfesionesService], (service: ProfesionesService) => {
    expect(service).toBeTruthy();
  }));
});
