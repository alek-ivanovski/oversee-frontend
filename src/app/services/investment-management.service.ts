import {Injectable} from '@angular/core';
import {Investment} from "../model/investment";

@Injectable()
export class InvestmentManagementService {

  constructor() {
  }

  private investments = [{
    id: 0,
    symbol1: 'BTC',
    symbol2: 'USD',
    units: 125.412,
    bought_at: 2465,
    invested: 309140.58,
    current: 8396.00,
    value: 1052959.15,
    pldollar: 743818.57,
    plprocent: 241
  }, {
    id: 1,
    symbol1: 'XRP',
    symbol2: 'USD',
    units: 100000,
    bought_at: 0.59,
    invested: 59000,
    current: 0.9685,
    value: 96850,
    pldollar: 37850,
    plprocent: 64.1
  }, {
    id: 2,
    symbol1: 'ETH',
    symbol2: 'USD',
    units: 338,
    bought_at: 0.59,
    invested: 376871.2,
    current: 0.9685,
    value: 283244,
    pldollar: -936272,
    plprocent: -24.8
  }, {
    id: 3,
    symbol1: 'DASH',
    symbol2: 'USD',
    units: 100,
    bought_at: 218.2,
    invested: 21820,
    current: 593,
    value: 59300,
    pldollar: 37480,
    plprocent: 171.8
  }];

  public getInvestments(): Investment[] {
    return this.investments;
  }

}
