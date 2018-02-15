import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Coin} from "../model/coin";

@Injectable()
export class CoinManagementService {

  constructor(private http: HttpClient) { }

  coinUrl = "/api/ticker/BTC/USD";

  getCoin(){
    return this.http.get<Coin>(this.coinUrl);
  }
}
