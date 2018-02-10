import { Injectable } from '@angular/core';
import {Investment} from "../model/investment";

@Injectable()
export class InvestmentManagementService {

  constructor() { }

  private investments = [{
    id : 0,
    symbol1: 'BTC',
    symbol2: 'USD',
    units: 125.412,
    bought_at: 2465,
    invested: 309140.58,
    current: 8396.00,
    value: 1052959.15,
    pldollar: 743818.57,
    plprocent: 341
  }, {
    id : 1,
    symbol1: 'XRP',
    symbol2: 'USD',
    units: 100000,
    bought_at: 0.59,
    invested: 59000,
    current: 0.9685,
    value: 96850,
    pldollar: 37850,
    plprocent: 164
  }]

  public getInvestments(): Investment[] {
    return this.investments;
  }
}
