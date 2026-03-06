import { Component, effect, signal } from '@angular/core';
import { ApiCall } from '../../../../shared/services/api-call/api-call';
import { ParseMessage } from './types/parse-message';
import { OrderMessageBox } from '../../ui/order-message-box/order-message-box';
import { Button } from "../../../../shared/ui/button/button";
import Order from '../../../../shared/types/order';
import { Ticket } from '../../../../shared/ui/ticket/ticket';

@Component({
	selector: 'app-simulate-order',
	imports: [OrderMessageBox, Button, Ticket],
	templateUrl: './simulate-order.html',
	styleUrl: './simulate-order.scss',
})
export class SimulateOrder {
	message = signal<string>("")
	result = signal<ParseMessage | undefined>(undefined)
	hide = signal<boolean>(false)
	date = signal(new Date())
	isSubmiting = signal<boolean>(false)

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
						} else {
							this.hide.set(true)
						}
					})
			}, 500)
		})
	}

	get total() {
		return this.result?.()?.semanticResult.items.reduce((prev, curr) => {
			return prev + curr.price
		}, 0) || 0
	}

	get mappedItems() {
		return this.result()?.semanticResult.items.map((item, index) => ({
			id: index,
			name: item.product,
			features: item.feature,
			quantity: item.quantity,
			price: item.price / 100,
			updatedAt: this.date().toString()
		})) ?? []
	}

	createOrder() {
		const result = this.result()
		if (!result) return

		this.isSubmiting.set(true)

		this.apiCall.post<Order>("order", {
			customerId: 1,
			items: result.semanticResult.items.map(item => ({
				name: item.product,
				features: item.feature,
				quantity: item.quantity,
				price: item.price
			}))
		}).subscribe(() => {
			this.isSubmiting.set(false)
		})
	}
}
