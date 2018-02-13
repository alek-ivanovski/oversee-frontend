import { Injectable } from '@angular/core';
import {Trade} from "../model/trade";

@Injectable()
export class TradeManagementService {

  constructor() { }

  private trades = [{
    id : 0,
    symbol1: 'BTC',
    symbol2: 'USD',
    type: 'BUY',
    units: 125.412,
    execute_at: 2465,
    current: 8396.00
  }, {
    id : 1,
    symbol1: 'XRP',
    symbol2: 'USD',
    type: 'BUY',
    units: 100000,
    execute_at: 0.59,
    current: 0.9685
  }, {
    id : 2,
    symbol1: 'ETH',
    symbol2: 'USD',
    type: 'BUY',
    units: 238,
    execute_at: 1233.4,
    current: 838
  }, {
    id : 3,
    symbol1: 'DASH',
    symbol2: 'USD',
    type: 'BUY',
    units: 100,
    execute_at: 218.2,
    current: 593
  }, {
    id : 4,
    symbol1: 'ETH',
    symbol2: 'USD',
    type: 'BUY',
    units: 100,
    execute_at: 833.22,
    current: 838
  }];

  public getTrades(): Trade[] {
    return this.trades;
  }

}
