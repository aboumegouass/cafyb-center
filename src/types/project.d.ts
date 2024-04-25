type Project = {
    id: number
    name: string
    client?: Client
    client_name: string
    code: string
    begain: string
    logo: string | null
    end: string
    status: "activated" | "disactivated"
}