export const projects: Project[] = [
    {
        id: 1,
        name: "Logo N1",
        begain: '12 Jul',
        end: '12 Des',
        status: "activated",
        client_name: "Kadour Jalal",
        code: "PR-293842",
        logo: "https://t3.ftcdn.net/jpg/01/30/98/72/360_F_130987286_UAJA9QvhEJor7kVSUzRiaWxSzGm8FKpZ.jpg",
    },
    {
        id: 2,
        name: "Logo N1",
        begain: '15 Oct',
        end: '22 Des',
        status: "activated",
        client_name: "Iman Benhamed",
        code: "PR-293842",
        logo: "https://i.pinimg.com/originals/37/96/73/37967347152332c7f2febeefae4fd5ea.jpg",
    },
    {
        id: 3,
        name: "Logo N3",
        begain: '09 Apl',
        end: '11 Sep',
        status: "activated",
        client_name: "Mohammed Boukarraf",
        code: "PR-293842",
        logo: "https://th.bing.com/th/id/R.060e7a2302aa9041ec73a8b53b5181b3?rik=OynfFqBe55JqRQ&riu=http%3a%2f%2fwww.thelogomix.com%2ffiles%2fimagecache%2fv3-logo-detail%2ffine-01.png&ehk=Iq0bqxT0TkdKulreGsFLmUJfEpW3tZiwrBdU42UuOlk%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        id: 4,
        name: "Logo N4",
        begain: '12 Jul',
        end: '12 Des',
        status: "disactivated",
        client_name: "Fouad Benchaouli",
        code: "PR-209382",
        logo: "https://cdn3.f-cdn.com/contestentries/2160807/42185195/63332b9ef27d6_thumb900.jpg",
    },
    {
        id: 5,
        name: "Logo N5",
        begain: '13 Des',
        end: '23 Nov',
        status: "activated",
        client_name: "Tahar Gallal",
        code: "PR-400892",
        logo: "https://static.vecteezy.com/system/resources/previews/012/906/487/original/px-initial-monogram-logo-design-in-a-rectangular-style-with-curved-sides-vector.jpg",
    },
    {
        id: 6,
        name: "Logo N6",
        begain: '05 Mar',
        end: '03 Des',
        status: "activated",
        client_name: "Bachir Megouas",
        code: "PR-120099",
        logo: "https://as2.ftcdn.net/v2/jpg/04/87/95/73/1000_F_487957313_1BlHosLGosHD9Zh6Ymylh9MmZSOvtecf.jpg",
    },
    {
        id: 7,
        name: "Logo N7",
        begain: '11 Jun',
        end: '08 Jan',
        status: "activated",
        client_name: "Hamid Rahal",
        code: "PR-293002",
        logo: "https://static.vecteezy.com/system/resources/previews/012/780/729/non_2x/pj-initial-monogram-logo-design-with-square-shape-design-ideas-vector.jpg",
    },
]
export const DataPieStatus = [
    { name: 'New', value: 300, color: '#ff7f0e' },
    { name: 'Billed', value: 200, color: '#1f77b4' },
]
export const DataPie = [
    { name: 'Canceled', value: 400, color: '#1f77b4' },
    { name: 'Paid', value: 300, color: '#9467bd' },
    { name: 'Ordered', value: 300, color: '#d62728' },
    { name: 'Delivered', value: 300, color: '#ff7f0e' },
    { name: 'Billed', value: 200, color: '#2ca02c' },
]
export const DataBars = [
    { week: 1, this_month: 1200, previous_month: 900 },
    { week: 2, this_month: 1900, previous_month: 1200 },
    { week: 3, this_month: 400, previous_month: 1000 },
    { week: 4, this_month: 1000, previous_month: 200 },
    { week: 5, this_month: 800, previous_month: 140 },
    { week: 6, this_month: 50, previous_month: 600 },
]
export const DEFAULT_CARDS = [
    { title: "Look into render bug in dashboard", text: "itaque molestias voluptatem cum voluptas non omnis, aliquam magni quaerat iusto eius accusantium ipsa rerum rem", id: "1", column: "backlog" },
    { title: "SOX compliance checklist", text: "itaque molestias voluptatem cum voluptas non omnis, aliquam magni quaerat iusto eius accusantium ipsa rerum rem", id: "2", column: "backlog" },
    { title: "[SPIKE] Migrate to Azure", text: "itaque molestias voluptatem cum voluptas non omnis, aliquam magni quaerat iusto eius accusantium ipsa rerum rem", id: "3", column: "backlog" },
    { title: "Document Notifications service", text: "itaque molestias voluptatem cum voluptas non omnis, aliquam magni quaerat iusto eius accusantium ipsa rerum rem", id: "4", column: "backlog" },
    {
        title: "Research DB options for new microservice",
        id: "5",
        column: "todo",
        text: "itaque molestias voluptatem cum voluptas non omnis, aliquam magni quaerat iusto eius accusantium ipsa rerum rem"
    },
    { title: "Postmortem for outage", id: "6", column: "todo", text: "itaque molestias voluptatem cum voluptas non omnis, aliquam magni quaerat iusto eius accusantium ipsa rerum rem" },
    { title: "Sync with product on Q3 roadmap", id: "7", column: "todo", text: "itaque molestias voluptatem cum voluptas non omnis, aliquam magni quaerat iusto eius accusantium ipsa rerum rem" },
    {
        title: "Refactor context providers to use Zustand",
        id: "8",
        column: "doing",
        text: "itaque molestias voluptatem cum voluptas non omnis, aliquam magni quaerat iusto eius accusantium ipsa rerum rem"
    },
    { title: "Add logging to daily CRON", id: "9", column: "doing", text: "itaque molestias voluptatem cum voluptas non omnis, aliquam magni quaerat iusto eius accusantium ipsa rerum rem" },
    {
        title: "Set up DD dashboards for Lambda listener",
        id: "10",
        column: "done",
        text: "itaque molestias voluptatem cum voluptas non omnis, aliquam magni quaerat iusto eius accusantium ipsa rerum rem"
    },
]
// Products Turnover
export const productTurnover = [
    {
        reference: '032397',
        designation: '261 Battle Ford',
        last_price: 37200,
        pmp: 3620,
        quantity_sold: 32,
        quantity_returned: 10,
        turnover: '47 400,00 (0,04 %)'
    },
    {
        reference: '032355',
        designation: '342 Faks Yoga',
        last_price: 10992,
        pmp: 90380,
        quantity_sold: 9,
        quantity_returned: 0,
        turnover: '43 100,00 (0,04 %)'
    },
    {
        reference: '030056',
        designation: '09234 Battle Ford',
        last_price: 37200,
        pmp: 3620,
        quantity_sold: 32,
        quantity_returned: 10,
        turnover: '47 400,00 (0,04 %)'
    },
    {
        reference: '030056',
        designation: '09234 Battle Ford',
        last_price: 37200,
        pmp: 3620,
        quantity_sold: 32,
        quantity_returned: 10,
        turnover: '47 400,00 (0,04 %)'
    },
    {
        reference: '030057',
        designation: '09123 War Zone',
        last_price: 41500,
        pmp: 3980,
        quantity_sold: 45,
        quantity_returned: 5,
        turnover: '55 750,00 (0,03 %)'
    },
    {
        reference: '030058',
        designation: '09456 Armored Keep',
        last_price: 28000,
        pmp: 2650,
        quantity_sold: 22,
        quantity_returned: 2,
        turnover: '32 200,00 (0,01 %)'
    },
    {
        reference: '030085',
        designation: '09342 Castle Stronghold',
        last_price: 61000,
        pmp: 5980,
        quantity_sold: 55,
        quantity_returned: 12,
        turnover: '68 750,00 (0,06 %)'
    },
    {
        reference: '030056',
        designation: '09234 Battle Ford',
        last_price: 37200,
        pmp: 3620,
        quantity_sold: 32,
        quantity_returned: 10,
        turnover: '47 400,00 (0,04 %)'
    },
    {
        reference: '030057',
        designation: '09123 War Zone',
        last_price: 41500,
        pmp: 3980,
        quantity_sold: 45,
        quantity_returned: 5,
        turnover: '55 750,00 (0,03 %)'
    },
    {
        reference: '030058',
        designation: '09456 Armored Keep',
        last_price: 28000,
        pmp: 2650,
        quantity_sold: 22,
        quantity_returned: 2,
        turnover: '32 200,00 (0,01 %)'
    },
    {
        reference: '030059',
        designation: '09087 Fortress Citadel',
        last_price: 60000,
        pmp: 5900,
        quantity_sold: 65,
        quantity_returned: 15,
        turnover: '39 000,00 (0,07 %)'
    },
    {
        reference: '030060',
        designation: '09321 Siege Tower',
        last_price: 35000,
        pmp: 3360,
        quantity_sold: 28,
        quantity_returned: 8,
        turnover: '49 000,00 (0,05 %)'
    },
    {
        reference: '030061',
        designation: '09543 Catapult Bay',
        last_price: 48000,
        pmp: 4580,
        quantity_sold: 50,
        quantity_returned: 12,
        turnover: '63 000,00 (0,06 %)'
    },
    {
        reference: '030062',
        designation: '09234 Battle Ford',
        last_price: 37200,
        pmp: 3620,
        quantity_sold: 32,
        quantity_returned: 10,
        turnover: '47 400,00 (0,04 %)'
    },
    {
        reference: '030063',
        designation: '09765 Rampart Gate',
        last_price: 55000,
        pmp: 5350,
        quantity_sold: 60,
        quantity_returned: 8,
        turnover: '66 000,00 (0,03 %)'
    },
    {
        reference: '030064',
        designation: '09987 Turret Heights',
        last_price: 42000,
        pmp: 3980,
        quantity_sold: 38,
        quantity_returned: 5,
        turnover: '57 400,00 (0,02 %)'
    },
    {
        reference: '030065',
        designation: '09432 Watchtower Peak',
        last_price: 29000,
        pmp: 2750,
        quantity_sold: 25,
        quantity_returned: 3,
        turnover: '37 750,00 (0,01 %)'
    },
    {
        reference: '030066',
        designation: '09876 Citadel Walls',
        last_price: 51000,
        pmp: 4980,
        quantity_sold: 48,
        quantity_returned: 6,
        turnover: '60 500,00 (0,03 %)'
    },
    {
        reference: '030067',
        designation: '09111 Keep Stronghold',
        last_price: 37000,
        pmp: 3550,
        quantity_sold: 30,
        quantity_returned: 4,
        turnover: '44 100,00 (0,02 %)'
    },
    {
        reference: '030068',
        designation: '09654 Fortress Bastion',
        last_price: 44000,
        pmp: 4250,
        quantity_sold: 42,
        quantity_returned: 7,
        turnover: '55 000,00 (0,04 %)'
    },
    {
        reference: '030069',
        designation: '09276 Watchtower Keep',
        last_price: 32000,
        pmp: 3050,
        quantity_sold: 34,
        quantity_returned: 3,
        turnover: '43 400,00 (0,02 %)'
    },
    {
        reference: '030070',
        designation: '09765 Citadel Walls',
        last_price: 60000,
        pmp: 5900,
        quantity_sold: 58,
        quantity_returned: 10,
        turnover: '70 800,00 (0,05 %)'
    },
    {
        reference: '030071',
        designation: '09123 Turret Keep',
        last_price: 39000,
        pmp: 3750,
        quantity_sold: 36,
        quantity_returned: 6,
        turnover: '46 800,00 (0,03 %)'
    },
    {
        reference: '030072',
        designation: '09456 Castle Rampart',
        last_price: 52000,
        pmp: 5050,
        quantity_sold: 48,
        quantity_returned: 8,
        turnover: '60 000,00 (0,04 %)'
    },
    {
        reference: '030073',
        designation: '09087 Fortress Gate',
        last_price: 47000,
        pmp: 4580,
        quantity_sold: 40,
        quantity_returned: 5,
        turnover: '54 800,00 (0,03 %)'
    },
    {
        reference: '030074',
        designation: '09321 Armored Tower',
        last_price: 34000,
        pmp: 3250,
        quantity_sold: 32,
        quantity_returned: 4,
        turnover: '44 800,00 (0,02 %)'
    },
    {
        reference: '030075',
        designation: '09543 Siege Keep',
        last_price: 59000,
        pmp: 5780,
        quantity_sold: 55,
        quantity_returned: 10,
        turnover: '68 450,00 (0,04 %)'
    },
    {
        reference: '030076',
        designation: '09234 Castle Tower',
        last_price: 38000,
        pmp: 3620,
        quantity_sold: 34,
        quantity_returned: 6,
        turnover: '50 920,00 (0,03 %)'
    },
    {
        reference: '030077',
        designation: '09765 Fortress Bay',
        last_price: 56000,
        pmp: 5450,
        quantity_sold: 52,
        quantity_returned: 7,
        turnover: '63 700,00 (0,03 %)'
    },
];
// Tries Data

export const tiers_data = [
    {
        "id": 1,
        "name": "Tier 1",
        "code": "002"
    },
    {
        "id": 2,
        "name": "Tier 2",
        "code": "005"
    },
    {
        "id": 3,
        "name": "Tier 3",
        "code": "008"
    },
    {
        "id": 4,
        "name": "Tier 4",
        "code": "011"
    },
    {
        "id": 5,
        "name": "Tier 5",
        "code": "014"
    }
]

// Products
export const products_data = [
    {
        "id": 1,
        "code": "P001",
        "name": "Premium Leather Wallet",
        "has_variants": false,
        "short_description": "Handcrafted wallet made of genuine leather.",
        "description": "This premium leather wallet is meticulously crafted to provide both style and functionality. With multiple compartments for cards and cash, it's the perfect accessory for any occasion.",
        "images": ["https://watermark.lovepik.com/photo/20211121/large/lovepik-cosmetic-cosmetics-picture_500597172.jpg", "https://example.com/wallet_image2.jpg"],
        "price": 1049.99,
        "category": {
            "id": 1,
            "name": "Accessories"
        }
    },
    {
        "id": 2,
        "code": "P002",
        "name": "Wireless Bluetooth Headphones",
        "has_variants": false,
        "short_description": "Immerse yourself in high-quality sound with these wireless headphones.",
        "description": "Experience the ultimate freedom with these wireless Bluetooth headphones. With crystal-clear sound and ergonomic design, they are perfect for music lovers on the go.",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpY8LxWWSH4hCDdHzORA0sFOyHMyEw9reC7fuNab7axdkohUPnBx0O4RSgux85i4XCP80&usqp=CAU", "https://example.com/headphones_image2.jpg"],
        "price": 9979.99,
        "category": {
            "id": 2,
            "name": "Electronics"
        }
    },
    {
        "id": 3,
        "code": "P003",
        "name": "Stainless Steel Water Bottle",
        "has_variants": false,
        "short_description": "Stay hydrated with this durable stainless steel water bottle.",
        "description": "This stainless steel water bottle is perfect for keeping your drinks cold or hot for hours. With its sleek design and leak-proof cap, it's ideal for outdoor adventures or everyday use.",
        "images": ["https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-products-photography1.jpg", "https://example.com/water_bottle_image2.jpg"],
        "price": 1419.99,
        "category": {
            "id": 3,
            "name": "Outdoor"
        }
    },
    {
        "id": 4,
        "code": "P004",
        "name": "Classic Leather Watch",
        "has_variants": false,
        "short_description": "Timeless elegance meets modern functionality.",
        "description": "Make a statement with this classic leather watch. Featuring a sleek design and precise movement, it's the perfect accessory for any outfit.",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAsq81pdyjPooOtP1AYhzSSGqLdwYjYpo-GL-s1kjh-6G-kqXJQif-y6Ep7g_RUy-BjA&usqp=CAU", "https://example.com/watch_image2.jpg"],
        "price": 17899.99,
        "category": {
            "id": 1,
            "name": "Accessories"
        }
    },
    {
        "id": 5,
        "code": "P005",
        "name": "Portable Smartphone Charger",
        "has_variants": false,
        "short_description": "Never run out of battery with this portable charger.",
        "description": "Stay connected on the go with this portable smartphone charger. Compact and lightweight, it's perfect for travel or emergencies.",
        "images": ["https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-product-coloured-bg.jpg", "https://example.com/charger_image2.jpg"],
        "price": 10000.99,
        "category": {
            "id": 2,
            "name": "Electronics"
        }
    },
    {
        "id": 6,
        "code": "P006",
        "name": "Camping Tent",
        "has_variants": false,
        "short_description": "Experience the great outdoors with this spacious camping tent.",
        "description": "Enjoy camping in comfort with this spacious tent. Easy to set up and durable, it's perfect for weekend getaways or extended trips.",
        "images": ["https://www.marketing91.com/wp-content/uploads/2012/01/HUL-Product-portfolio.jpg", "https://example.com/tent_image2.jpg"],
        "price": 14900.99,
        "category": {
            "id": 3,
            "name": "Outdoor"
        }
    },
    {
        "id": 7,
        "code": "P007",
        "name": "Premium Fountain Pen",
        "has_variants": false,
        "short_description": "Elevate your writing experience with this premium fountain pen.",
        "description": "Write in style with this premium fountain pen. Crafted from high-quality materials, it offers smooth ink flow and comfortable grip for long writing sessions.",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg", "https://example.com/pen_image2.jpg"],
        "price": 6900.99,
        "category": {
            "id": 1,
            "name": "Accessories"
        }
    },
    {
        "id": 8,
        "code": "P008",
        "name": "Smart Fitness Tracker",
        "has_variants": false,
        "short_description": "Achieve your fitness goals with this smart tracker.",
        "description": "Track your activity, monitor your heart rate, and stay motivated with this smart fitness tracker. Its sleek design and intuitive interface make it the perfect companion for your fitness journey.",
        "images": ["https://paymentcloudinc.com/blog/wp-content/uploads/2021/08/product-ideas-to-sell.jpg", "https://example.com/tracker_image2.jpg"],
        "price": 1290.99,
        "category": {
            "id": 2,
            "name": "Electronics"
        }
    },
    {
        "id": 9,
        "code": "P009",
        "name": "Insulated Travel Mug",
        "has_variants": false,
        "short_description": "Keep your drinks hot or cold on the go with this insulated travel mug.",
        "description": "Whether you're commuting to work or hitting the trails, this insulated travel mug will keep your drinks at the perfect temperature. Its leak-proof design and durable construction make it a must-have accessory.",
        "images": ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.financialexpress.com%2Fbusiness%2Findustry-one-in-3-online-shoppers-receives-fake-products-study-1137679%2F&psig=AOvVaw2ePP5EL6RH6a6QGE42nHSz&ust=1710836809710000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDIi_Wx_YQDFQAAAAAdAAAAABAJ", "https://example.com/mug_image2.jpg"],
        "price": 2400.99,
        "category": {
            "id": 3,
            "name": "Outdoor"
        }
    },
    {
        "id": 10,
        "code": "P010",
        "name": "Leather Laptop Bag",
        "has_variants": false,
        "short_description": "Protect your laptop in style with this leather bag.",
        "description": "Carry your laptop in style with this premium leather bag. With padded compartments and multiple pockets, it provides ample protection and organization for your devices and accessories.",
        "images": ["https://static.toiimg.com/photo/msid-74691084/74691084.jpg", "https://example.com/laptop_bag_image2.jpg"],
        "price": 19999.99,
        "category": {
            "id": 1,
            "name": "Accessories"
        }
    },
]

// Attributes Data
export const attributes_data = [

]