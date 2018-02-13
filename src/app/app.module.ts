import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {InvestmentManagementService} from "./services/investment-management.service";
import {TradeManagementService} from "./services/trade-management.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InvestmentManagementService, TradeManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
