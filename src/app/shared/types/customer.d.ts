import CustomerContact from "./customerContact"

export default interface Customer {
    id: number
    name: string
    surname: string | null
    contacts: CustomerContact[]
    createdAt: string
    updatedAt: string
}