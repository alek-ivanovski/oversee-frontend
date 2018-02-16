import {Component, OnInit} from '@angular/core';
import {InvestmentManagementService} from "./services/investment-management.service";
import {Investment} from "./model/investment";
import {Trade} from "./model/trade";
import {TradeManagementService} from "./services/trade-management.service";
import {CoinManagementService} from "./services/coin-management.service";
import {Coin} from "./model/coin";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'OverSee';
  public investments: Investment[];
  public trades: Trade[];
  public totalInvested = 0;
  public totalValue = 0;
  public profit = 0;

  public selectedInvestment: Investment;

  // Temp testing variable
  public coinValue: Coin;

  constructor(private investmentService: InvestmentManagementService,
              private tradesService: TradeManagementService,
              private coinService: CoinManagementService) {

  }

  ngOnInit(): void {
    this.investments = this.investmentService.getInvestments();
    this.trades = this.tradesService.getTrades();
    this.investments.forEach(element => {
      this.totalInvested = this.totalInvested + element.invested
    });
    this.investments.forEach(element => {
      this.totalValue = this.totalValue + element.value
    });
    this.profit = this.totalValue - this.totalInvested;

    // Testing variable
    this.coinService.getCoin()
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
  }

  onSelect(investment: Investment): void {
    this.selectedInvestment = investment;
  }

}
