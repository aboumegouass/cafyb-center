const baseURL = ''
export const sidebarMenu = [
    {
        id: 3,
        baseURL: baseURL,
        clickable: false,
        label: "Purchases",
        icon: "icofont-food-basket",
        hasMenu: true,
        href: "/clients",
        subMenu: [
            {
                id: 1,
                baseURL: baseURL,
                hasMenu: false,
                clickable: false,
                label: "Purchase contract",
                href: "/documents/add/31",
            },
            {
                id: 2,
                baseURL: baseURL,
                hasMenu: false,
                clickable: false,
                label: "Purchase contracts list",
                href: "/documents/index/31",
            },
            {
                id: 14,
                hasMenu: false,
                baseURL: baseURL,
                clickable: false,
                label: "Invoices list",
                href: "/documents/index/18",
            },
            {
                id: 16,
                baseURL: baseURL,
                hasMenu: false,
                clickable: false,
                label: "Suppliers",
                href: "/third-parties/index/1",
            },
        ]
    },
    {
        id: 4,
        baseURL: baseURL,
        clickable: false,
        label: "Procurement",
        icon: "navigation",
        hasMenu: true,
        href: "/projects",
        subMenu: [
            {
                id: 1,
                baseURL: baseURL,
                hasMenu: false,
                clickable: false,
                label: "Product request",
                href: "/procurements/documents/add/28",
            },
            {
                id: 2,
                baseURL: baseURL,
                clickable: false,
                hasMenu: false,
                label: "Purchase request",
                href: "/procurements/documents/add/29",
            },
            {
                id: 3,
                baseURL: baseURL,
                hasMenu: false,
                clickable: false,
                label: "Procurement list",
                href: "/procurements/documents/index/30",
            },
        ]
    },
    {
        id: 5,
        baseURL: baseURL,
        clickable: false,
        label: "Road bills",
        icon: "truck",
        hasMenu: true,
        href: "/products",
        subMenu: [
            {
                id: 1,
                baseURL: baseURL,
                clickable: false,
                hasMenu: false,
                label: "Add road bil",
                href: "/road-bills/documents/add",
            },
            {
                id: 2,
                baseURL: baseURL,
                hasMenu: false,
                clickable: false,
                label: "Road bills list",
                href: "/road-bills/documents",
            },
        ]
    },
    {
        id: 8,
        baseURL: baseURL,
        clickable: false,
        label: "POS",
        icon: "cart",
        hasMenu: true,
        href: "/invoices",
        subMenu: [
            {
                id: 1,
                baseURL: baseURL,
                clickable: false,
                label: "Pos",
                href: "/posales/pos/pos",
            },
            {
                id: 2,
                baseURL: baseURL,
                clickable: false,
                label: "Sessions",
                href: "/posales/sessions",
            },
        ]
    },
    {
        id: 9,
        baseURL: baseURL,
        clickable: false,
        label: "Treasuries",
        icon: "money",
        hasMenu: true,
        href: "/contacts",
        subMenu: [
            {
                id: 1,
                hasMenu: false,
                baseURL: baseURL,
                clickable: true,
                label: "Credit",
                href: "#",
            },
            {
                hasMenu: false,
                id: 2,
                baseURL: baseURL,
                clickable: true,
                label: "Debit",
                href: "#",
            },
            {
                id: 3,
                baseURL: baseURL,
                hasMenu: false,
                clickable: true,
                label: "Fund transfer",
                href: "#",
            },
            {
                id: 4,
                baseURL: baseURL,
                hasMenu: false,
                clickable: false,
                label: "Credits / Debits list",
                href: "/payments",
            },
            {
                id: 5,
                baseURL: baseURL,
                clickable: false,
                hasMenu: false,
                label: "Accounts",
                href: "/accounts",
            },
        ]
    },
    {
        id: 10,
        baseURL: baseURL,
        label: "Advanced treasury",
        clickable: false,
        icon: "bank-alt",
        hasMenu: true,
        href: "/contacts",
        subMenu: [
            {
                id: 2,
                baseURL: baseURL,
                hasMenu: false,
                clickable: false,
                label: "Account statements",
                href: "/advanced-treasury/account-statements",
            },
            {
                id: 3,
                baseURL: baseURL,
                clickable: false,
                hasMenu: false,
                label: "Accounting accounts",
                href: "/accounting-accounts",
            },
            {
                id: 4,
                baseURL: baseURL,
                clickable: false,
                hasMenu: false,
                label: "AA types",
                href: "/accounting-account-types",
            },
        ]
    },
    {
        id: 15,
        label: "Documentation",
        clickable: false,
        hasMenu: false,
        icon: "read-book",
        baseURL: 'http://cafyb.com',
        href: "/help/commercial"
    },
]

export const product_menu = [
    {
        id: 1,
        name: "All Products",
        icon: "fluent-mdl2:product",
        href: "/products"
    },
    {
        id: 2,
        name: "Attributes",
        icon: "material-symbols:edit-attributes-outline",
        href: "/products/attributes"
    },
    {
        id: 3,
        name: "Attributs Groups",
        icon: "fluent:group-20-regular",
        href: "/products/groups"
    },
    {
        id: 4,
        name: "Collections",
        icon: "fluent:collections-24-regular",
        href: "/products/collections"
    },
    {
        id: 5,
        name: "Categories",
        icon: "iconamoon:category",
        href: "/products/categories"
    },
]