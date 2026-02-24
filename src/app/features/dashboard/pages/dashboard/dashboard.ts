import { Component } from '@angular/core';
import { Statistics } from "../../ui/statistics/statistics";
import { Orders } from "../../ui/orders/orders";
import { AuthQr } from "../../ui/auth-qr/auth-qr";

@Component({
  selector: 'app-dashboard',
  imports: [Statistics, Orders, AuthQr],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
