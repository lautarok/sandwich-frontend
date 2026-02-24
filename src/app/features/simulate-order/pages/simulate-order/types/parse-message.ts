export interface ParseMessage {
    originalMessage: string
    semanticResult: {
        items: {
            product: string,
            feature: string,
            quantity: number
        }[]
    }
}
