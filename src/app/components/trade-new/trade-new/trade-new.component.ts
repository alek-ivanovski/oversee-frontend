import {Component, OnInit, Input, OnChanges} from '@angular/core';
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
  private trade: Trade;

  // Form model is saved here
  private tradeForm: FormGroup;

  constructor(private tradeService: TradeManagementService,
              private coinService: CoinManagementService,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.tradeForm = this.fb.group({
      type: ['', Validators.required],
      units: ['', [Validators.required, Validators.pattern("[0-9]{1,9}")]],
      price: ['', [Validators.required, Validators.pattern("^[0-9]{1,9}[\.,]{0,1}[0-9]{1,2}")]],
      date: ['', [Validators.required, Validators.pattern("^[0-3][0-9]\.[0-1][0-9]\.20[0-1][0-9]$")]]
    });
  }

  onSubmit() {
    this.trade = this.prepareSaveTrade();
    this.tradeService.saveTrade(this.trade);
    this.ngOnChanges();
  }

  prepareSaveTrade(): Trade {
    const formModel = this.tradeForm.value;
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

     this.tradeForm.reset();
  }

}
