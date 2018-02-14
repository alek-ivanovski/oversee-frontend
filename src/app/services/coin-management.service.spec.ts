import { TestBed, inject } from '@angular/core/testing';

import { CoinManagementService } from './coin-management.service';

describe('CoinManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinManagementService]
    });
  });

  it('should be created', inject([CoinManagementService], (service: CoinManagementService) => {
    expect(service).toBeTruthy();
  }));
});
