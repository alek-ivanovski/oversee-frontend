import { Component, OnInit } from '@angular/core';
import {InvestmentManagementService} from "./services/investment-management.service";
import {Investment} from "./model/investment";
import {Trade} from "./model/trade";
import {TradeManagementService} from "./services/trade-management.service";

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

  constructor (private investmentService: InvestmentManagementService,
               private tradesService: TradeManagementService) {

  }

  ngOnInit(): void {
    this.investments = this.investmentService.getInvestments();
    this.trades = this.tradesService.getTrades();
    this.investments.forEach(element => {this.totalInvested = this.totalInvested + element.invested});
    this.investments.forEach(element => {this.totalValue = this.totalValue + element.value});
    this.profit = this.totalValue - this.totalInvested;
  }
}
