import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {InvestmentManagementService} from "./services/investment-management.service";
import {TradeManagementService} from "./services/trade-management.service";
import {CoinManagementService} from "./services/coin-management.service";
import {HttpClientModule} from "@angular/common/http";
import { TradeNewComponent } from './components/trade-new/trade-new/trade-new.component';


@NgModule({
  declarations: [
    AppComponent,
    TradeNewComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [InvestmentManagementService, TradeManagementService, CoinManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
