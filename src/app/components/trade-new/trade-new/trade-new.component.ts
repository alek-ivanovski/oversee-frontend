import { Component, OnInit, Input } from '@angular/core';
import {Investment} from "../../../model/investment";

@Component({
  selector: 'app-trade-new',
  templateUrl: './trade-new.component.html',
  styleUrls: ['./trade-new.component.css']
})
export class TradeNewComponent implements OnInit {

  @Input() investment: Investment;

  constructor() { }

  ngOnInit() {
  }

}
