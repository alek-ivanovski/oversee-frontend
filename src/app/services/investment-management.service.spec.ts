import { TestBed, inject } from '@angular/core/testing';

import { InvestmentManagementService } from './investment-management.service';

describe('InvestmentManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestmentManagementService]
    });
  });

  it('should be created', inject([InvestmentManagementService], (service: InvestmentManagementService) => {
    expect(service).toBeTruthy();
  }));
});
