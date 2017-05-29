import { TestBed, inject } from '@angular/core/testing';

import { ProfesionalesService } from './profesionales.service';

describe('ProfesionalesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfesionalesService]
    });
  });

  it('should ...', inject([ProfesionalesService], (service: ProfesionalesService) => {
    expect(service).toBeTruthy();
  }));
});
