import { Component } from '@angular/core';
import { Statistics } from "../../ui/statistics/statistics";
import { Orders } from "../../ui/orders/orders";
import { Button } from "../../../../shared/ui/button/button";

@Component({
  selector: 'app-dashboard',
  imports: [Statistics, Orders, Button],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
