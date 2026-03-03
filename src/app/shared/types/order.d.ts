import Customer from "./customer"
import OrderItem from "./orderItem"

export default interface Order {
    id: number
    total: number
    customer: Customer
    items: OrderItem[]
    createdAt: string
    updatedAt: string
}