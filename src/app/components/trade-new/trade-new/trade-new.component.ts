import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Investment} from "../../../model/investment";
import {TradeManagementService} from "../../../services/trade-management.service";
import {CoinManagementService} from "../../../services/coin-management.service";
import {Coin} from "../../../model/coin";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Trade} from "../../../model/trade";

@Component({
  selector: 'app-trade-new',
  templateUrl: './trade-new.component.html',
  styleUrls: ['./trade-new.component.css']
})
export class TradeNewComponent implements OnInit {

  @Input() investment: Investment;

  private coinValue: Coin;
  private tradeGroup: FormGroup;
  private trade: Trade;

  constructor(private tradeService: TradeManagementService,
  private coinService: CoinManagementService,
  private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.tradeGroup = this.fb.group({
      type: '',
      units: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onSubmit() {
    this.trade = this.prepareSaveTrade();
    this.tradeService.saveTrade(this.trade);
    this.ngOnChanges();
  }

  prepareSaveTrade(): Trade {
    const formModel = this.tradeGroup.value;
    return formModel;
  }

  ngOnChanges() {
    this.coinService.getCustomCoin(this.investment.symbol1, this.investment.symbol2)
      .subscribe(data => this.coinValue = {
        timestamp: data['timestamp'],
        low: data['low'],
        high: data['high'],
        last: data['last'],
        volume: data['volume'],
        volume30d: data['volume30d'],
        bid: data['bid'],
        ask: data['ask']
      });

    this.tradeGroup.reset();
  }

}
