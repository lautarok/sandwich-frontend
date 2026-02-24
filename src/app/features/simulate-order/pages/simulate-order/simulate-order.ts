import { Component, effect, signal } from '@angular/core';
import { ApiCall } from '../../../../shared/adapters/api-call/api-call';
import { ParseMessage } from './types/parse-message';
import { OrderMessageBox } from '../../../../shared/ui/order-message-box/order-message-box';

@Component({
  selector: 'app-simulate-order',
  imports: [OrderMessageBox],
  templateUrl: './simulate-order.html',
  styleUrl: './simulate-order.scss',
})
export class SimulateOrder {
  message = signal<string>("")
  result = signal<ParseMessage | undefined>(undefined)
  hide = signal<boolean>(false)
  date = signal<Date | undefined>(undefined)

  get total() {
    return this.result?.()?.semanticResult.items.reduce((acc, curr) => {
      acc += (curr.quantity / 12) * (
        curr.product === "miga" && curr.feature === "verdura" ? 13000
          : curr.product === "miga" ? 11000
          : 10000
      )
      return acc
    }, 0)
  }

  constructor(
    private apiCall: ApiCall
  ) {
    let timer: number | undefined
    effect(() => {
      clearTimeout(timer)
      if (!this.message()) {
        this.hide.set(true)
        return
      }

      setTimeout(async () => {
        const searchParams = new URLSearchParams()
        searchParams.set("message", this.message())

        this.apiCall.get<ParseMessage>("parse-message?" + searchParams.toString())
          .subscribe(data => {
            if (data.semanticResult.items.length > 0) {
              this.result.set(data)
              this.date.set(new Date())
              this.hide.set(false)
            }
          })
      }, 100)
    })
  }
}
