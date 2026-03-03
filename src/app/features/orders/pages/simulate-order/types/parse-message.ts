export interface ParseMessage {
    semanticResult: {
        items: {
            product: string,
            feature: string,
            quantity: number,
            price: number
        }[]
    }
}
