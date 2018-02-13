import { TestBed, inject } from '@angular/core/testing';

import { TradeManagementService } from './trade-management.service';

describe('TradeManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeManagementService]
    });
  });

  it('should be created', inject([TradeManagementService], (service: TradeManagementService) => {
    expect(service).toBeTruthy();
  }));
});
