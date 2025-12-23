import time_management_icon from "@/assets/Svgs/time-management.svg"
import vector_icon from "@/assets/Svgs/Vector.svg"
import network_icon from "@/assets/Svgs/network.svg"
import ownerHome_icon from "@/assets/Svgs/ownerHome.svg"
import work_icon from "@/assets/Svgs/work.svg"
import market_1_icon from "@/assets/Svgs/market-1.svg"
import garage_icon from "@/assets/Svgs/garage.svg"
import company_icon from "@/assets/Svgs/company.svg"
import area_with_pins_icon from "@/assets/Svgs/area-with-pins.svg"
import business_center_icon from "@/assets/Svgs/business-center.svg"
import budget_image from "@/assets/images/budget.png.webp"
import office_image from "@/assets/images/office.png.webp"
import advertising_image from "@/assets/images/advertising.png.webp"
import agents_image from "@/assets/images/agents.png.webp"

export const WhoWeAreData = [
    {
        icon: time_management_icon,
        title: [
            { text: "15", colored: true },
            { text: "Years", colored: false },
        ],
        text: "of success"
    },
    {
        icon: vector_icon,
        title: [
            { text: "Close to", colored: false },
            { text: "500", colored: true },
        ],
        text: "employees"
    },
    {
        icon: network_icon,
        title: [
            { text: "18", colored: true },
            { text: "Languages", colored: false },
        ],
        text: "spoken by our experts"
    },
    {
        icon: ownerHome_icon,
        title: [
            { text: "AED", colored: false },
            { text: "11", colored: true },
            { text: "billion", colored: false },
        ],
        text: "sales in 2022"
    },
]


export const HowCanWeHelpData = [
    {
        icon : work_icon,
        title : "Offices and co-working spaces",
        description : "With many local and foreign companies, as well as self-employed individuals operating in the UAE, offices are among the most profitable property types and provide a high rental ROI. These can be located in apartment complexes, shopping malls and freestanding buildings, and are suitable for rental or co-working spaces."
    },
    {
        icon : market_1_icon,
        title : "Retail spaces",
        description : "Are traditionally the most popular type of commercial real estate, as they allow foreign nationals to quickly launch their own business in the UAE. This can be a compact retail outlet or a large supermarket. It is possible to buy a store in any district of Dubai, but the most popular areas are Dubai Marina and International City."
    },
    {
        icon : garage_icon,
        title : "Warehouses and showrooms",
        description : "It is possible to acquire a warehouse in Dubai in a freehold-zone or freezone. The most popular areas to obtain warehouses in commercial, industrial and port areas are Jebel Ali, Al Quoz, Dubai Investment Park and Ras Al Khor. At the same time, showrooms are a relatively new market segment, which is gaining in popularity."
    },
    {
        icon : company_icon,
        title : "Commercial buildings",
        description : "One can buy a separate floor or the entire building, where the most popular for the purchase / lease are shopping and business centers. Commercial buildings also include fitness clubs, beauty salons, spas, clinics, hotel apartments, etc."
    },
    {
        icon : area_with_pins_icon,
        title : "Land plots",
        description : "Depending on the type of use, land plots are divided into industrial land (exclusively for production purposes – construction or extension of factories, warehouses, etc.) and land of mixed use (for the construction of commercial and residential buildings). Foreign nationals may rent a plot of land for a period of up to 99 years."
    },
    {
        icon : business_center_icon,
        title : "Factories and labour camps",
        description : "In Dubai there are seven industrial zones, set aside for factories and plants. Here you can buy a ready-made enterprise or run your own facility. Many employers, who hire foreign employees for labour work or are in the service industry, construct or lease labour camps near the facility for their own convenience."
    },
]


export const HowDoWeWorkData = [
    {
        image : budget_image,
        title : "Commercial real estate market analysis",
        description : "In order to select the property with the maximum return on investment potential for you, Metropolitan Premium Properties' experts conduct comprehensive market research beforehand. Since our experts have access to up-to-date statistical data and audit reports, we are able to make an objective assessment of the commercial property, its risks and benefits, and make accurate predictions on the effectiveness of investments for your business.",
        image_left : false
    },
    {
        image : office_image,
        title : "Identify Your Needs",
        description : "If you are acquiring a property for future lease we will calculate your expected passive income, as well as identify the circle of potential tenants and develop a respective promotion strategy. In addition, Metropolitan Premium Properties provides professional property management services, which will include taking care of everything from finding and handling communication with the tenant, to drawing up a contract and facility maintenance.",
        image_left : true
    },
    {
        image : advertising_image,
        title : "Fast sale commercial real estate",
        description : "We will also help you to sell your commercial property on favorable terms, using open and closed platforms, and, if necessary, organize an effective advertising campaign in the UAE and overseas.",
        image_left : false
    },
    {
        image : agents_image,
        title : "Preparation of documents",
        description : "Our lawyers will prepare all the necessary documents, including purchase/sale/leaseback agreements, business licenses, income and expense reports and more. We will be happy to advise you on any matters relating to the commercial real estate market in Dubai and the intricacies of the local legislation.",
        image_left : true
    },
]