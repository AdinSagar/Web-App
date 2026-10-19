export type IndustryContent = {
  slug: string; name: string; title: string; description: string; intro: string;
  audience: string; challenge: string; features: { title: string; body: string }[];
  workflow: string[]; demo: string; questions: { question: string; answer: string }[];
}

export const industryPages: IndustryContent[] = [
  {
    slug: "retail-pos-kenya", name: "Retail shops", title: "Retail POS Software in Kenya",
    description: "Explore Fahampesa retail POS software for Kenyan shops. Record sales, track inventory and review business reports. Request a demonstration in Nairobi or online.",
    intro: "Keep counter sales, stock and daily business records together. Fahampesa helps Kenyan shop owners see what sold and what is available, with a POS workspace for the team serving customers.",
    audience: "General stores, clothing shops, electronics shops and other retailers selling products at the counter.",
    challenge: "A sale written in one book and a stock count kept somewhere else can leave an owner unsure what is available. Keeping product, sales and inventory records together gives the team a clearer starting point for daily decisions.",
    features: [
      { title: "Record counter sales", body: "Choose products, enter quantities and keep a record of completed sales. Review transaction details when a customer or staff member needs clarification." },
      { title: "Keep stock visible", body: "Maintain product prices and quantities, and review stock movement alongside sales. Use the inventory view to prepare a restocking decision." },
      { title: "Review the trading day", body: "Check sales, expenses and available business reports. Owners can review synced records online away from the counter, subject to connectivity and account access." },
    ],
    workflow: ["Add the products and starting stock for the shop.", "Record a customer's basket and its payment in the supported checkout workflow.", "Review the sale and stock records, then use reports to plan the next trading day."],
    demo: "Bring a short list of your products, current prices and devices. Ask us to demonstrate a sale, a stock adjustment and a daily report with examples that match your shop.",
    questions: [
      { question: "Can I review my shop while I am away?", answer: "You can review synced business records online with an authorized owner account. Records made offline become available on other devices after they synchronize." },
      { question: "Is POS hardware included?", answer: "The software subscription and hardware are separate. Tell us which computer, scanner and printer you already use so we can confirm a suitable setup." },
    ],
  },
  {
    slug: "supermarket-pos-kenya", name: "Supermarkets", title: "Supermarket & Minimart POS Software in Kenya",
    description: "Fahampesa POS for supermarkets and minimarts in Kenya: product sales, inventory, staff access and reports. See a demonstration with your shop's products.",
    intro: "Give a supermarket or minimart a clear record of checkout activity and stock. Fahampesa brings product sales, inventory and reporting into the same business workspace.",
    audience: "Minimarts, grocery stores, convenience shops and supermarkets managing a product catalogue and daily checkout activity.",
    challenge: "A busy checkout needs consistent product prices and a reliable way to review what was sold. When stock and sales records are disconnected, the owner has more work to do before deciding what to reorder.",
    features: [
      { title: "Organize the product catalogue", body: "Keep products, prices and stock quantities in one place. Prepare the items your cashiers need before they begin serving customers." },
      { title: "Keep checkout records", body: "Build a basket, adjust quantities and review the recorded transaction. Demonstrate your barcode scanner and receipt printer with our team to confirm device compatibility." },
      { title: "Give staff appropriate access", body: "Use supported staff roles and PIN access for daily work. Review business reports through an owner account instead of sharing the same access with every cashier." },
    ],
    workflow: ["Set up products, prices and opening quantities for the branch.", "Record the basket at checkout and retain the sale details.", "Review daily sales and stock before planning replenishment."],
    demo: "Send a sample product list and describe your busiest checkout period. We can walk through baskets, staff access, stock records and printing on the equipment you plan to use.",
    questions: [
      { question: "Can a minimart use Fahampesa?", answer: "Yes. The product, sales and inventory workflows can be used by minimarts and grocery stores. A demonstration helps confirm your catalogue and checkout requirements." },
      { question: "Can you confirm scanner and printer compatibility?", answer: "Tell us the device models and connection types before choosing hardware. Compatibility should be checked with the setup you intend to use." },
    ],
  },
  {
    slug: "wholesale-pos-kenya", name: "Wholesale", title: "Wholesale POS & Inventory Software in Kenya",
    description: "Manage wholesale sales, stock, suppliers and customer invoices with Fahampesa in Kenya. Request a demonstration for your wholesale business.",
    intro: "Bring bulk sales and stock records into one business view. Fahampesa helps wholesalers record quantities, organize suppliers and follow customer business records without relying on separate notebooks.",
    audience: "Wholesale shops, distributors and businesses supplying goods in larger quantities.",
    challenge: "Wholesalers need to know what was supplied, how much stock remains and which customer records need attention. Large quantities make clear units and accurate opening stock particularly important.",
    features: [
      { title: "Record quantity-based sales", body: "Select products and quantities for each transaction. Confirm your unit and pack setup during a demonstration so the recorded stock matches how you buy and sell." },
      { title: "Connect purchasing and stock", body: "Organize suppliers and purchase records alongside inventory. Follow received goods and quantities before preparing the next order." },
      { title: "Keep customer balances in view", body: "Use supported customer, invoice and debtor workflows to review amounts recorded as outstanding. Confirm the exact credit-sale process for your business with our team." },
    ],
    workflow: ["Define product units, prices and opening quantities.", "Record the customer's order and retain its sales or invoice records.", "Review inventory, customer balances and purchasing needs."],
    demo: "Bring a sample bulk order, a supplier purchase and your pack-size examples. We will show how the supported workflows fit your stock units and customer records.",
    questions: [
      { question: "Does Fahampesa manage supplier records?", answer: "Yes. Supplier and purchasing tools are part of the business software. Ask for a demonstration of the purchasing workflow you need." },
      { question: "Can I track customers who owe the business?", answer: "Supported debtor and invoice workflows keep customer balances and recorded payments visible. Your demonstration should include the way your team handles credit." },
    ],
  },
  {
    slug: "restaurant-pos-kenya", name: "Restaurants & cafés", title: "Restaurant & Café POS Software in Kenya",
    description: "Explore Fahampesa restaurant POS software in Kenya for orders, tables, kitchen workflow and sales records. Book a restaurant or café demonstration.",
    intro: "Keep the front counter and kitchen working from clear order records. Fahampesa provides a restaurant workspace for food and drink orders, tables and daily sales.",
    audience: "Restaurants, cafés and takeaway businesses that need to organize orders and review service activity.",
    challenge: "When an order is taken, prepared and paid for in separate places, teams need a clear handover. An order workspace helps staff follow the recorded items and preparation status during service.",
    features: [
      { title: "Organize dine-in and takeaway orders", body: "Record food and drink items and use supported table and order workflows. Keep each order's details available for the staff handling it." },
      { title: "Follow kitchen preparation", body: "Use the kitchen workflow to follow orders through preparation and ready states. Walk through the cashier, waiter and kitchen roles in a demonstration." },
      { title: "Review completed service", body: "Keep sale and receipt records after checkout. Review daily sales, expenses and reports to understand the recorded business activity." },
    ],
    workflow: ["Set up the menu, prices, tables and staff access.", "Record an order and send it through the supported kitchen workflow.", "Complete checkout and review the sale and daily reports."],
    demo: "Describe your dine-in and takeaway service and the devices used by your cashier and kitchen. Ask us to demonstrate a full order from entry through preparation to checkout.",
    questions: [
      { question: "Can I see kitchen order progress?", answer: "Fahampesa has a supported restaurant kitchen workflow with preparation and ready states. Confirm the device and staff setup in your demonstration." },
      { question: "Does it suit a small café?", answer: "A café can use the food and drink sales workspace. Tell us whether you need counter-only service, tables or a kitchen handover so we can demonstrate the right setup." },
    ],
  },
  {
    slug: "hotel-management-software-kenya", name: "Hotels", title: "Hotel Management & POS Software in Kenya",
    description: "Explore Fahampesa hotel software in Kenya for rooms, reservations, guest stays and business sales. Request a hotel workflow demonstration.",
    intro: "Keep room and guest-stay records alongside the business tools your team uses each day. Fahampesa's hotel workspace supports reservations, check-ins, check-outs and hotel sales.",
    audience: "Hotels, lodges and guest houses looking for a business workspace for accommodation records and daily operations.",
    challenge: "A reservation, a guest arrival and a completed stay each need clear records. Reception staff and owners benefit from a shared view of the recorded room and guest activity.",
    features: [
      { title: "Organize rooms and reservations", body: "Maintain room and reservation records in the hotel workspace. Confirm your room types and booking process during the demonstration." },
      { title: "Follow the guest stay", body: "Use supported check-in and check-out workflows to record the stay. Show our team your reception process so we can explain the relevant steps." },
      { title: "Review hotel business activity", body: "Record supported hotel sales and business expenses, then review available reports. Ask us to demonstrate exactly how accommodation and other sales are recorded." },
    ],
    workflow: ["Set up rooms and the staff who manage reception.", "Record a reservation and follow the guest check-in workflow.", "Complete check-out and review the recorded stay and business activity."],
    demo: "Bring a sample reservation and describe your reception routine. Confirm your room-management needs and how you handle restaurant or other charges before choosing the software.",
    questions: [
      { question: "Can Fahampesa record reservations and check-ins?", answer: "Yes. The hotel workspace includes reservation, check-in and check-out tools. A demonstration will show the supported workflow." },
      { question: "Does this include an online booking marketplace?", answer: "Do not assume a marketplace or external booking-channel integration is included. Ask our team to confirm any online-booking requirement separately." },
    ],
  },
  {
    slug: "bar-pos-kenya", name: "Bars", title: "Bar POS & Stock Management Software in Kenya",
    description: "Fahampesa bar POS software in Kenya helps teams record drink orders, review sales and track product stock. Book a demonstration for your bar or lounge.",
    intro: "Keep drinks sales and stock records visible through the trading day. Fahampesa gives bar teams a workspace for orders and sales, with business reports for the owner.",
    audience: "Bars and lounges selling drinks and other stocked products, with counter or supported table-service workflows.",
    challenge: "Owners need to compare the drinks sold with the stock recorded. Clear product units and consistent sales entries matter when several staff members serve customers during a shift.",
    features: [
      { title: "Record drinks and quantities", body: "Set up products and prices, then record the items sold. Demonstrate bottles, packs or other selling units with our team before deciding how to configure your catalogue." },
      { title: "Keep order details available", body: "Use supported bar and restaurant order workflows for service. Confirm the table, waiter and checkout steps that match your venue." },
      { title: "Review sales and stock", body: "Compare recorded sales with inventory information and available reports. Review synced business records online when you are away from the venue." },
    ],
    workflow: ["Set up drinks, selling units and starting quantities.", "Record customer orders and complete the supported checkout steps.", "Review sales and stock records to prepare for the next trading day."],
    demo: "Bring your drinks list and explain how you sell bottles, packs or measures. We will confirm the supported product setup and walk through an order, checkout and stock review.",
    questions: [
      { question: "Can I check bar sales away from the venue?", answer: "An authorized owner can review synced records online. Offline activity must synchronize before it is visible on another device." },
      { question: "Are special drink measures supported?", answer: "Ask our team to demonstrate your exact selling units. Do not assume automatic bottle-to-measure conversion without checking the configured workflow." },
    ],
  },
  {
    slug: "salon-pos-kenya", name: "Salons & spas", title: "Salon & Spa POS Software in Kenya",
    description: "Fahampesa salon software in Kenya brings service sales, product sales, staff and appointments together. Request a salon, barbershop or spa demonstration.",
    intro: "Record a treatment and the products sold with it in the same business system. Fahampesa supports salon services, walk-ins, appointments and staff assignments alongside sales records.",
    audience: "Salons, barbershops and spas that sell treatments, appointments and retail products.",
    challenge: "A salon may serve walk-ins, manage booked visits and sell products during the same day. Clear service and product records help the owner understand the work recorded by the team.",
    features: [
      { title: "Bring services and products together", body: "Set up treatments and retail products, then record the service or goods sold. Keep the sale details available for later review." },
      { title: "Organize booked and walk-in visits", body: "Use supported appointment, walk-in and staff-assignment tools. Confirm the booking and provider setup that suits your salon in a demonstration." },
      { title: "Review the day's activity", body: "Review service sales, product stock and recorded expenses. Owners can use synced business records to follow the salon away from the front desk." },
    ],
    workflow: ["Add treatments, products and the team who provides services.", "Record a walk-in or appointment and the associated service sale.", "Review the day's sales and remaining product quantities."],
    demo: "Send a few treatment names and describe how you assign staff and book clients. We can show a service sale, an appointment and a product sale using relevant examples.",
    questions: [
      { question: "Can I sell shampoo alongside a haircut?", answer: "Yes. The sales workflow supports products and services. Ask us to demonstrate how your treatments and retail items are configured." },
      { question: "Does the salon software include appointments?", answer: "Supported appointment and staff-assignment tools are available. Confirm the exact scheduling workflow and device support with our team." },
    ],
  },
  {
    slug: "service-business-software-kenya", name: "Service businesses", title: "Service Business & Appointment Software in Kenya",
    description: "Explore Fahampesa software for Kenyan service businesses: services, appointments, assigned work and sales records. Request a workflow demonstration.",
    intro: "Keep service work and its sales records together. Fahampesa helps service businesses organize what they offer, record appointments or work requests, and review daily business activity.",
    audience: "Massage and wellness providers, repair services, electricians, cleaning teams and other supported service businesses.",
    challenge: "A service business needs to know which work was requested, who is handling it and what was recorded as a sale. The right workflow depends on whether customers book a time, arrive as walk-ins or request a job.",
    features: [
      { title: "Set up your service catalogue", body: "Organize the services you provide and their prices. Use labels and categories appropriate to your business rather than treating every service as a stocked product." },
      { title: "Organize appointments or assigned work", body: "Use the supported service workflow for appointments, service requests and staff assignments. Confirm which flow fits your business before configuring it." },
      { title: "Keep business records connected", body: "Record service sales and expenses, then review the available reports. Where a business also sells products, demonstrate the product and service records together." },
    ],
    workflow: ["Choose the supported service profile and add your services.", "Record the appointment, walk-in or work request using the appropriate workflow.", "Record the completed service sale and review the business activity."],
    demo: "Describe one real customer journey, from first inquiry to completed work. Bring example services and prices so we can demonstrate the supported appointment or job flow.",
    questions: [
      { question: "Can a massage or repair business use Fahampesa?", answer: "Fahampesa supports service-business profiles. Explain your appointment or work-request process so our team can demonstrate whether the current workflow fits." },
      { question: "Is this a clinical patient-record system?", answer: "This page describes service operations and business records. It does not claim clinical patient records, medical billing or a hospital information system." },
    ],
  },
]

export { industryHref } from "./industry-links"
