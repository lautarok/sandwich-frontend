import { Component, signal } from '@angular/core';
import { Link } from '../../../../shared/ui/link/link';
import { List } from "../../../../shared/ui/resource/list/list";
import Customer from '../../../../shared/types/customer';
import { ApiCall } from '../../../../shared/services/api-call/api-call';

@Component({
  selector: 'app-customers',
  imports: [Link, List],
  templateUrl: './customers.html',
  styleUrl: './customers.scss',
})
export class Customers {
  customers = signal<Customer[]>([])

  constructor(
    private readonly apiCall: ApiCall
  ) {
    this.apiCall.get<{
      count: number,
      list: Customer[]
    }>("customer").subscribe(data => {
      this.customers.set(data.list)
    })
  }

  get mappedCustomers() {
    return this.customers().map(customer => [
      customer.id.toString(),
      customer.name,
      customer.surname || "",
      customer.createdAt
    ])
  }
}
