import { Component, input } from '@angular/core';
import Order from '../../types/order';
import { Barcode } from '../barcode/barcode';

@Component({
  selector: 'app-ticket',
  imports: [Barcode],
  templateUrl: './ticket.html',
  styleUrl: './ticket.scss',
})
export class Ticket {
  order = input.required<Order>()

  get createdAt() {
    return new Date(this.order().createdAt)
  }
}
