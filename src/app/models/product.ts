export interface Product {
    id : number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    ratirng: {
        rate: number,
        count: number
    }
}