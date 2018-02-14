import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {InvestmentManagementService} from "./services/investment-management.service";
import {TradeManagementService} from "./services/trade-management.service";
import {CoinManagementService} from "./services/coin-management.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [InvestmentManagementService, TradeManagementService, CoinManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
