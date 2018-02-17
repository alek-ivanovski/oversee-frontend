import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Coin} from "../model/coin";

@Injectable()
export class CoinManagementService {

  constructor(private http: HttpClient) { }

  coinUrl = "/api/ticker/BTC/USD";
  coinCustomUrl = "/api/ticker/";

  getCoin(){
    return this.http.get(this.coinUrl);
  }

  getCustomCoin(symbol1: string, symbol2: string){
    return this.http.get(this.coinCustomUrl
      .concat(symbol1)
      .concat("/")
      .concat(symbol2));
  }

}
