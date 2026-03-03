export default interface CustomerContact {
    id: number
    type: "whatsapp" | "instagram" | "facebook"
    value: string
    createdAt: string
    updatedAt: string
}