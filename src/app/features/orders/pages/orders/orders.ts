import { Component, signal } from '@angular/core';
import { Link } from '../../../../shared/ui/link/link';
import { List } from "../../../../shared/ui/resource/list/list";
import Order from '../../../../shared/types/order';
import { ApiCall } from '../../../../shared/services/api-call/api-call';

@Component({
  selector: 'app-orders',
  imports: [Link, List],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
  orders = signal<Order[]>([])

  constructor(
    private readonly apiCall: ApiCall
  ) {
    this.apiCall.get<{
      count: number,
      list: Order[]
    }>("order").subscribe(data => {
      this.orders.set(data.list)
    })
  }

  get mappedOrders() {
    return this.orders()?.map<string[]>(value => [
      value.id.toString(),
      (value.total / 100).toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS"
      }).replaceAll("&nbsp;", ""),
      `${value.customer.name} ${value.customer.surname}`,
      new Date(value.createdAt).toLocaleString("es-AR", {
        dateStyle: "short",
        timeStyle: "short"
      })
    ])
  }
}
