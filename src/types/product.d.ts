type Product = {
    id: number
    code: string
    name: string
    has_variants: boolean
    short_description: string
    description: string
    images: string[]
    price: number
    category: {
        id: number
        name: string
    }
}
type Attribute = {
    id: number
    name: string
    type: string
}
type ProductTurnover = {
    reference: string
    designation: string
    last_price: number
    pmp: number
    quantity_sold: number
    quantity_returned: number
    turnover: string
}
type ProductVariant = {
    id: number
    code: string
    name: string
    has_variants: boolean
    short_description: string
    description: string
    images: string[]
    price: number
    category: {
        id: number
        name: string
    }
}