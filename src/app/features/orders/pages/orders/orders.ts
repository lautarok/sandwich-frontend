import { Component, signal } from '@angular/core';
import { Link } from '../../../../shared/ui/link/link';
import { List } from "../../../../shared/ui/resource/list/list";
import Order from '../../../../shared/types/order';
import { ApiCall } from '../../../../shared/services/api-call/api-call';
import { ActivatedRoute } from '@angular/router';
import { Filters } from "../../ui/filters/filters";

@Component({
  selector: 'app-orders',
  imports: [Link, List, Filters],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
  orders = signal<Order[] | null>(null)
  totalPages = signal<number>(0)

  constructor(
    private readonly apiCall: ApiCall,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(data => {
      let page = 1
      if (/^\d+$/.test(data["page"])) {
        page = parseInt(data["page"])
      }
      
      this.apiCall.get<{
        count: number,
        list: Order[]
      }>(`order?page=${page}`).subscribe(data => {
        this.orders.set(data.list)
        this.totalPages.set(Math.ceil(data.count / 10))
      })
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
    ]) || []
  }
}
