type UserInfo = {
    id: number
    avatar: string
    created_at: string
    first_name: string
    is_owner: boolean
    phone: string
    last_name: string
}
type User = {
    id: number
    completed_at: string
    created_at: string
    current_plan: Plan
    lang?: string
    email: string
    theme?: string
    info: UserInfo
    last_login: string
    info_of_pages: InfoOfPages[]
    step: number
    status: boolean
    username: string
}
type InfoOfPages = {
    business: string
    created_at: string
    id: number
    image: string
    is_choose: boolean
    name: string
    tasks: string[]
}
type Plan = {
    description: string
    eligibilities: {
        max_categories: number
        max_employees: number
        max_orders: number
        max_products: number
    }
    features: string[]
    interval: string[]
    key: string
    monthlyIncentive: number | null
    name: string
    planId: {
        monthly: string
        yearly: string
    }
    price: {
        monthly: number | string
        yearly: number | string
    }
    trialDays: number
    yearlyIncentive: number | null
}