import { Component, OnInit } from '@angular/core';
import {InvestmentManagementService} from "./services/investment-management.service";
import {Investment} from "./model/investment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'OverSee';
  public investments: Investment[];

  constructor (private investmentService: InvestmentManagementService) {

  }

  ngOnInit(): void {
    this.investments = this.investmentService.getInvestments()
  }
}
