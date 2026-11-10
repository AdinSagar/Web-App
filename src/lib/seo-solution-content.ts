export type SeoSolutionPage = {
  slug: string
  label: string
  title: string
  description: string
  eyebrow: string
  heading: string
  intro: string
  audience: string
  proof: string[]
  features: { title: string; body: string }[]
  workflow: { title: string; body: string }[]
  example: { title: string; intro: string; rows: { label: string; value: string; note: string }[]; outcome: string }
  checklist: { title: string; body: string }[]
  questions: { question: string; answer: string }[]
  related: { label: string; href: string; description: string }[]
  note: string
}

export const seoSolutionPages: SeoSolutionPage[] = [
  {
    slug: 'invoice-software-kenya',
    label: 'Invoice software',
    title: 'Invoice Software in Kenya for Small Businesses | FahamPesa',
    description: 'Create invoices, record customer payments, follow outstanding balances and keep sales records together with FahamPesa invoice software in Kenya.',
    eyebrow: 'INVOICE SOFTWARE IN KENYA',
    heading: 'From the invoice to the balance still due.',
    intro: 'Prepare a clear customer invoice, record what has been paid and return to the balance without searching through separate books. FahamPesa keeps invoices connected to customers, sales and payment records.',
    audience: 'Built for Kenyan retailers, wholesalers, service businesses and property teams that need a consistent record of what a customer was charged, what arrived and what remains outstanding.',
    proof: ['Customer records', 'Itemised invoices', 'Payment history', 'Outstanding balances'],
    features: [
      { title: 'Prepare an itemised invoice', body: 'Add the customer, products or services, quantities and agreed prices. Review the total before saving so the document reflects the transaction you discussed.' },
      { title: 'Record payments against the invoice', body: 'Keep a payment record with the amount, date, method and reference. A part payment leaves the remaining balance visible instead of making the invoice appear complete.' },
      { title: 'Return to customer history', body: 'Review earlier invoices and recorded payments from the customer record. This gives staff a clearer starting point before following up on an unpaid amount.' },
      { title: 'Keep the source records connected', body: 'Use invoice, sales and customer records together. Export or print the supported document when the customer needs a copy for their own records.' },
    ],
    workflow: [
      { title: 'Confirm the customer and items', body: 'Check the customer name, contact details, quantities, prices and any agreed due date before creating the invoice.' },
      { title: 'Issue the invoice', body: 'Save the invoice and share the supported copy. Keep the original record in the business workspace instead of relying on a forwarded image.' },
      { title: 'Record money received', body: 'Enter each payment against the correct invoice. Confirm M-Pesa, bank or card transactions from the payment provider before marking money as received.' },
      { title: 'Review what remains', body: 'Use the invoice and customer history to see the unpaid balance and prepare an accurate follow-up.' },
    ],
    example: {
      title: 'A part payment should leave a clear balance.',
      intro: 'A wholesaler invoices a customer for three product lines. The customer pays part of the total today and agrees to settle the balance later.',
      rows: [
        { label: 'Invoice total', value: 'KSh 24,500', note: 'Products and quantities agreed' },
        { label: 'Payment recorded', value: 'KSh 15,000', note: 'Reference kept with the record' },
        { label: 'Balance remaining', value: 'KSh 9,500', note: 'Still attached to the invoice' },
      ],
      outcome: 'The example separates the sale, the money received and the balance. It is illustrative and does not represent a customer transaction.',
    },
    checklist: [
      { title: 'Use accurate customer details', body: 'Confirm the customer name and contact information before issuing the document.' },
      { title: 'Describe every line clearly', body: 'Use specific product or service names, quantities and units.' },
      { title: 'Keep payment references', body: 'Record the reference that connects the business entry to the source transaction.' },
      { title: 'Avoid marking unverified money as paid', body: 'Recording a payment method does not process or verify the transfer.' },
    ],
    questions: [
      { question: 'Does FahamPesa process M-Pesa payments from an invoice?', answer: 'A recorded M-Pesa payment is a business record. It does not automatically prove or process a transfer. Confirm the transaction through the enabled payment workflow.' },
      { question: 'What happens when a customer pays only part of an invoice?', answer: 'Record the amount received against the invoice. The remaining amount stays visible as an outstanding balance.' },
      { question: 'Can I return to earlier customer invoices?', answer: 'Supported customer and invoice histories keep earlier records available to authorised users.' },
      { question: 'Is this KRA eTIMS invoicing?', answer: 'This page describes FahamPesa business invoices. Do not treat a standard business invoice as an eTIMS tax invoice unless your enabled setup specifically confirms that integration.' },
    ],
    related: [
      { label: 'Bookkeeping software', href: '/business/bookkeeping-software-kenya', description: 'Connect invoices with sales, expenses and daily records.' },
      { label: 'Supplier management', href: '/business/supplier-management-software', description: 'Keep purchase and supplier records organised.' },
      { label: 'Wholesale software', href: '/industries/wholesale-pos-kenya', description: 'Follow bulk sales, customers and stock.' },
      { label: 'Business reports', href: '/business/reports', description: 'Try a worked report example in your browser.' },
    ],
    note: 'Tax treatment, document requirements and eTIMS obligations depend on the business and the enabled integration. Confirm current requirements with KRA or a qualified adviser.',
  },
  {
    slug: 'supplier-management-software',
    label: 'Supplier management',
    title: 'Supplier Management Software in Kenya | FahamPesa',
    description: 'Organise suppliers, purchase records, received stock and amounts owed with FahamPesa supplier management software for Kenyan businesses.',
    eyebrow: 'SUPPLIER MANAGEMENT SOFTWARE',
    heading: 'Know who supplied what, when and for how much.',
    intro: 'Keep supplier contacts, purchases and received goods connected to the stock your business depends on. FahamPesa gives purchasing work a consistent record from the order to the amount still owed.',
    audience: 'For shops, wholesalers, supermarkets, pharmacies, hardware businesses and other teams that buy products from several suppliers and need to explain how stock entered the business.',
    proof: ['Supplier profiles', 'Purchase records', 'Received quantities', 'Outstanding amounts'],
    features: [
      { title: 'Keep supplier profiles current', body: 'Store the trading name, contact details and the information your team needs when preparing a purchase or following up on a delivery.' },
      { title: 'Record purchases consistently', body: 'Use clear product names, quantities, units and costs. A reliable purchase record gives later stock and cost reviews a useful source.' },
      { title: 'Connect received goods to stock', body: 'Check what arrived before updating quantities. Record shortages, damaged items or differences instead of silently changing the expected amount.' },
      { title: 'Follow supplier balances', body: 'Keep the purchase total, recorded payments and remaining amount visible where the supported workflow applies.' },
    ],
    workflow: [
      { title: 'Choose the supplier', body: 'Start from the supplier profile so the purchase and later communication remain attached to the right business.' },
      { title: 'Prepare the purchase record', body: 'Add products, units, expected quantities and costs. Review the order before sending or saving it.' },
      { title: 'Check the delivery', body: 'Compare the physical delivery with the purchase record. Confirm what was accepted before updating available stock.' },
      { title: 'Review payment and history', body: 'Record the supported supplier payment details and return to the purchase history when planning the next order.' },
    ],
    example: {
      title: 'A delivery difference should remain explainable.',
      intro: 'A shop orders 20 cartons. Eighteen arrive in saleable condition and two are damaged.',
      rows: [
        { label: 'Quantity ordered', value: '20 cartons', note: 'Expected from the supplier' },
        { label: 'Accepted into stock', value: '18 cartons', note: 'Counted and saleable' },
        { label: 'Difference', value: '2 cartons', note: 'Recorded for supplier follow-up' },
      ],
      outcome: 'The record explains why the purchase quantity and accepted stock differ. It avoids adding goods that are not available for sale.',
    },
    checklist: [
      { title: 'Use one selling unit', body: 'Decide whether the record is measured in cartons, packs or individual items.' },
      { title: 'Count before receiving', body: 'Check physical quantities and condition before changing stock.' },
      { title: 'Keep cost evidence', body: 'Retain the supplier invoice, reference or other source document required by your process.' },
      { title: 'Review before reordering', body: 'Compare available stock, recent movement and earlier purchases.' },
    ],
    questions: [
      { question: 'Does FahamPesa replace a supplier invoice?', answer: 'No. Keep the supplier document required for your accounting and tax records. FahamPesa helps organise the business record around the purchase.' },
      { question: 'Can I record a supplier I have not paid in full?', answer: 'Supported purchase and payment records show the purchase total, amounts recorded and the remaining balance.' },
      { question: 'Does receiving a purchase update inventory?', answer: 'The exact workflow depends on the workspace. Ask for a demonstration using your products and selling units before setup.' },
      { question: 'Can different branches use the same supplier?', answer: 'Supplier and branch access depend on the configured business workspace and staff permissions. Confirm the intended branch workflow during setup.' },
    ],
    related: [
      { label: 'Inventory management', href: '/inventory-management-software-kenya', description: 'Count stock and keep product quantities visible.' },
      { label: 'Invoice software', href: '/business/invoice-software-kenya', description: 'Follow customer invoices and payments.' },
      { label: 'Wholesale software', href: '/industries/wholesale-pos-kenya', description: 'Manage bulk quantities and purchase records.' },
      { label: 'Hardware shop POS', href: '/industries/hardware-shop-pos-kenya', description: 'Organise products, suppliers and customer records.' },
    ],
    note: 'A purchase record should reflect the goods your team checked. Payment recording does not automatically send money to a supplier or verify a bank or M-Pesa transaction.',
  },
  {
    slug: 'bookkeeping-software-kenya',
    label: 'Bookkeeping software',
    title: 'Bookkeeping Software for Small Businesses in Kenya | FahamPesa',
    description: 'Keep sales, purchases, expenses and customer balances in one business workspace with FahamPesa bookkeeping software for Kenyan small businesses.',
    eyebrow: 'BOOKKEEPING FOR KENYAN BUSINESSES',
    heading: 'Daily records that lead to better questions.',
    intro: 'Bring sales, expenses, purchases and balances into one business view. FahamPesa helps owners replace scattered notes with records they can review at the end of the day, week or month.',
    audience: 'For small and growing businesses that need operational records for decision-making. It supports the daily work behind bookkeeping and does not replace professional accounting, tax filing or an independent audit.',
    proof: ['Sales records', 'Expense entries', 'Purchases', 'Business reports'],
    features: [
      { title: 'Record sales from the source', body: 'Keep products or services, quantities, totals and payment details attached to the sale instead of entering one unexplained daily number.' },
      { title: 'Capture operating expenses', body: 'Record the expense category, amount, date and a useful description. Keep source documents according to your business and tax requirements.' },
      { title: 'Keep purchases visible', body: 'Connect supplier purchases and received stock to the records your team reviews when checking costs and replenishment.' },
      { title: 'Review without mixing measures', body: 'Treat sales, cash received, cost of goods and operating expenses as different measures. A report becomes more useful when the records behind it are complete.' },
    ],
    workflow: [
      { title: 'Record activity when it happens', body: 'Enter a sale, purchase or expense close to the event so the description and amount remain clear.' },
      { title: 'Use consistent categories', body: 'Apply the same categories and units across the team. Consistency makes comparisons more useful.' },
      { title: 'Check the source', body: 'Compare cash, M-Pesa or bank records with the entries before treating the day as complete.' },
      { title: 'Review differences', body: 'Investigate missing stock, unexplained expenses or unpaid balances instead of adjusting totals without a reason.' },
    ],
    example: {
      title: 'Sales are not the same as money left over.',
      intro: 'A shop records sales, the cost of the items sold and operating expenses for one example period.',
      rows: [
        { label: 'Recorded sales', value: 'KSh 84,000', note: 'Value of completed sales' },
        { label: 'Cost of goods sold', value: 'KSh 48,000', note: 'Cost attached to the items sold' },
        { label: 'Operating expenses', value: 'KSh 18,000', note: 'Entered business expenses' },
      ],
      outcome: 'The remaining KSh 18,000 is an illustrative operating result before tax, owner drawings, financing and other adjustments. It is not a certified profit figure.',
    },
    checklist: [
      { title: 'Separate business and personal spending', body: 'Keep the business record focused on business activity.' },
      { title: 'Retain source documents', body: 'Keep receipts, supplier invoices and payment evidence required for your records.' },
      { title: 'Review customer balances', body: 'An unpaid sale and money received should not be treated as the same number.' },
      { title: 'Ask for professional advice', body: 'Use a qualified accountant or tax adviser for reporting and filing obligations.' },
    ],
    questions: [
      { question: 'Is FahamPesa an accounting firm?', answer: 'No. FahamPesa provides business software. Consult a qualified accountant or tax adviser for professional accounting and tax decisions.' },
      { question: 'Can I record expenses?', answer: 'Supported business workspaces include expense records and reporting. Use clear descriptions and keep the source document.' },
      { question: 'Does the software calculate tax returns?', answer: 'Do not rely on operational reports as a filed tax return. Confirm current KRA requirements and any enabled integration separately.' },
      { question: 'What should I review every day?', answer: 'Review completed sales, money received, expenses, stock differences and outstanding customer balances.' },
    ],
    related: [
      { label: 'Invoice software', href: '/business/invoice-software-kenya', description: 'Keep customer charges and payments connected.' },
      { label: 'Supplier management', href: '/business/supplier-management-software', description: 'Organise purchases and supplier balances.' },
      { label: 'Inventory management', href: '/inventory-management-software-kenya', description: 'Connect stock counts with product movement.' },
      { label: 'Report preview', href: '/business/reports', description: 'Try an illustrative report with your own totals.' },
    ],
    note: 'FahamPesa business records support operational decisions. They do not replace audited financial statements, professional accounting advice or statutory tax submissions.',
  },
  {
    slug: 'tenant-management-software',
    label: 'Tenant management',
    title: 'Tenant Management Software in Kenya | FahamPesa',
    description: 'Organise tenants, units, monthly rent, leases, deposits and payment histories with FahamPesa tenant management software in Kenya.',
    eyebrow: 'TENANT MANAGEMENT SOFTWARE IN KENYA',
    heading: 'Every tenant connected to the right unit and history.',
    intro: 'Keep tenant details, rental terms, expected rent, payments and deposits in one property workspace. Return to the history when a balance, receipt or agreement needs attention.',
    audience: 'For Kenyan landlords, property managers and rental teams managing monthly rentals or fixed-term leases across one or more properties.',
    proof: ['Tenant profiles', 'Units and rentals', 'Rent history', 'Deposit records'],
    features: [
      { title: 'Attach the tenant to the correct unit', body: 'Create the property and unit first, then start the rental with the expected rent, start date and supported agreement type.' },
      { title: 'Keep rent expectations visible', body: 'A monthly rental records the recurring amount without requiring a false end date. A fixed-term lease keeps its agreed dates.' },
      { title: 'Separate rent from deposits', body: 'Track the required deposit, amounts received, held balance, refunds and shortfall separately from rent and rent credit.' },
      { title: 'Return to one history', body: 'Review invoices, rent payments, deposit entries, reversals and supported maintenance records from the tenant context.' },
    ],
    workflow: [
      { title: 'Create the property and unit', body: 'Use the real building, unit number and location so staff select the correct rental.' },
      { title: 'Start the rental', body: 'Add the tenant, expected monthly rent, required deposit, start date and agreement type.' },
      { title: 'Record payments accurately', body: 'Enter the amount received, method, date and reference. Keep part payments and overpayments visible.' },
      { title: 'Review before following up', body: 'Check the tenant history, outstanding invoices, rent credit and deposit position before contacting the tenant.' },
    ],
    example: {
      title: 'Rent and deposit balances should stay separate.',
      intro: 'A tenant owes monthly rent of KSh 15,000 and has a required deposit of KSh 30,000.',
      rows: [
        { label: 'Rent received', value: 'KSh 10,000', note: 'KSh 5,000 rent remains' },
        { label: 'Deposit received', value: 'KSh 20,000', note: 'KSh 10,000 deposit shortfall' },
        { label: 'Rent credit', value: 'KSh 0', note: 'No excess rent recorded' },
      ],
      outcome: 'The rent balance and deposit shortfall remain distinct. Recording money in one category should not silently change the other.',
    },
    checklist: [
      { title: 'Use the real unit number', body: 'A unique unit reference reduces the risk of attaching a payment to the wrong rental.' },
      { title: 'Confirm the expected rent', body: 'Record the agreed monthly amount and effective date.' },
      { title: 'Set the required deposit', body: 'Keep required, received, held and refunded amounts clear.' },
      { title: 'Protect tenant information', body: 'Give staff only the access needed for their role and follow applicable data protection obligations.' },
    ],
    questions: [
      { question: 'Can I create a monthly rental without an end date?', answer: 'Yes. A monthly rental does not need a false fixed end date. Use a fixed-term lease when the agreement has one.' },
      { question: 'What happens when a tenant pays part of the rent?', answer: 'Record the amount received. The unpaid balance remains visible against the rental invoice.' },
      { question: 'Can excess rent be used later?', answer: 'Supported rent credit remains attached to the same rental and can be applied to later invoices according to the enabled workflow.' },
      { question: 'Does the system collect rent automatically?', answer: 'Recording an M-Pesa, bank or cash payment does not automatically collect or verify it. Confirm the enabled collection workflow separately.' },
    ],
    related: [
      { label: 'Property management', href: '/business/property-management', description: 'See units, rent, deposits and property records together.' },
      { label: 'Rent and deposit guide', href: '/guides/rent-payments-and-deposits', description: 'Review part payments, credit and deposit examples.' },
      { label: 'Invoice software', href: '/business/invoice-software-kenya', description: 'Understand invoices and recorded payments.' },
      { label: 'Get started', href: '/business/get-started', description: 'Prepare the information needed for a property workspace.' },
    ],
    note: 'Property records support administration. They do not replace a valid tenancy agreement, legal advice or the duties imposed by Kenyan law.',
  },
  {
    slug: 'seller-help',
    label: 'Seller Help Centre',
    title: 'FahamPesa Seller Help Centre | Stores, Listings & Orders',
    description: 'Set up your FahamPesa seller profile, publish useful listings, share store links and manage supported orders with practical seller guidance.',
    eyebrow: 'FAHAMPESA SELLER HELP CENTRE',
    heading: 'Publish a store customers understand.',
    intro: 'Prepare your business profile, listings and fulfilment details before sharing a link. This help centre brings together the practical steps sellers need from setup to customer follow-up.',
    audience: 'For FahamPesa sellers publishing retail products, restaurant items, rooms, appointments or local services through a supported seller workflow.',
    proof: ['Store setup', 'Listing quality', 'Sharing links', 'Order support'],
    features: [
      { title: 'Complete the public business profile', body: 'Use the trading name customers know, a real service or pickup area, current contact details and a description of what the business offers.' },
      { title: 'Publish complete listings', body: 'Add a specific title, current price, useful description and original image. Include size, model, duration or other decision details when relevant.' },
      { title: 'Explain fulfilment before sharing', body: 'State pickup, delivery area, expected timing and fees. A customer should understand the next step before starting an enquiry or order.' },
      { title: 'Follow supported order states', body: 'Review new requests, confirm availability and use the enabled order workflow. Keep customer communication factual and current.' },
    ],
    workflow: [
      { title: 'Set up the business', body: 'Choose the correct business mode and complete the public profile.' },
      { title: 'Prepare one strong listing', body: 'Start with a real item or service and complete every useful field before publishing more.' },
      { title: 'Open the public link', body: 'Check the store and listing on a phone. Confirm the photo, price, location and next action.' },
      { title: 'Share and maintain', body: 'Use the readable link on WhatsApp and social profiles, then update changed prices and unavailable items promptly.' },
    ],
    example: {
      title: 'A complete listing answers the next question.',
      intro: 'Compare a weak product title with a listing that gives a shopper enough context to continue.',
      rows: [
        { label: 'Weak title', value: 'Shoes', note: 'No type, size or condition' },
        { label: 'Clear title', value: 'Men’s running shoes, size 42', note: 'Specific product and variant' },
        { label: 'Next step', value: 'Pickup in Parklands', note: 'Area and fulfilment made clear' },
      ],
      outcome: 'Use original photos and accurate details. Do not copy another seller’s images, claims or description.',
    },
    checklist: [
      { title: 'Check identity and contact details', body: 'Use the public business information customers should see.' },
      { title: 'Use an original image', body: 'Show the real product, room, food item or service result where appropriate.' },
      { title: 'State availability honestly', body: 'Unpublish or update items that are no longer available.' },
      { title: 'Test the customer journey', body: 'Open the public link and complete the next step from a shopper’s phone.' },
    ],
    questions: [
      { question: 'Why is my listing not public?', answer: 'Check the required business and listing details, image, price, availability and publication status. Contact support if a complete eligible listing remains unavailable.' },
      { question: 'Can customers open my store without the app?', answer: 'Published store and listing pages open in a browser. Supported orders and bookings continue through a compatible Shop app.' },
      { question: 'Does a WhatsApp message create an order?', answer: 'No. A WhatsApp enquiry is a conversation. It does not create a FahamPesa order or payment record.' },
      { question: 'What should I do when a price changes?', answer: 'Update the listing before sharing it again. Current prices reduce confusion and cancelled requests.' },
    ],
    related: [
      { label: 'Sell online in Kenya', href: '/business/sellers', description: 'Review the seller workflow and listing readiness checklist.' },
      { label: 'Share on WhatsApp', href: '/guides/share-your-store-on-whatsapp', description: 'Prepare a useful store link and message.' },
      { label: 'Search and AI guide', href: '/business/search-and-ai', description: 'Improve accurate business information across search and social.' },
      { label: 'Shopper Help Centre', href: '/business/shopper-help', description: 'See the information customers need before ordering.' },
    ],
    note: 'A published listing is not a verification badge or guarantee of stock, delivery or seller identity. Keep every public claim accurate and current.',
  },
  {
    slug: 'shopper-help',
    label: 'Shopper Help Centre',
    title: 'FahamPesa Shopper Help Centre | Shopping, Orders & Bookings',
    description: 'Browse FahamPesa stores, check listings, contact sellers and understand supported orders or bookings with practical shopper help.',
    eyebrow: 'FAHAMPESA SHOPPER HELP CENTRE',
    heading: 'Check the details before you choose the next step.',
    intro: 'Explore published businesses and listings, review the seller information and confirm availability, price and fulfilment. This help centre explains the difference between browsing, enquiries, orders and bookings.',
    audience: 'For shoppers using FahamPesa Shop to explore local products, food, stays, appointments and services from published businesses.',
    proof: ['Browse businesses', 'Check listings', 'Contact sellers', 'Track supported requests'],
    features: [
      { title: 'Review the business and listing', body: 'Check the business name, location, public contact, item details, current price and available fulfilment information.' },
      { title: 'Confirm availability', body: 'A published page shows what the seller has offered. Confirm current stock, room availability, appointment time or service coverage before travelling or paying.' },
      { title: 'Know which action you are taking', body: 'A WhatsApp enquiry starts a conversation. A supported in-app order or booking creates a separate request with its own status.' },
      { title: 'Keep payment evidence', body: 'Use the payment method agreed through the supported workflow. Confirm the recipient and retain the source transaction record.' },
    ],
    workflow: [
      { title: 'Search and compare', body: 'Open the business and listing pages that match your location and need.' },
      { title: 'Read the details', body: 'Check price, description, seller area, pickup or delivery terms and any cancellation information.' },
      { title: 'Confirm the next step', body: 'Ask a question or submit the supported order or booking. Do not treat an unanswered message as confirmation.' },
      { title: 'Follow the status', body: 'Use the enabled app workflow and seller communication to confirm acceptance, preparation, collection, delivery or appointment timing.' },
    ],
    example: {
      title: 'An enquiry is different from a confirmed order.',
      intro: 'A shopper opens a food listing and asks the restaurant whether delivery is available.',
      rows: [
        { label: 'Listing opened', value: 'Menu item viewed', note: 'No order created' },
        { label: 'WhatsApp enquiry', value: 'Question sent', note: 'Still not a confirmed order' },
        { label: 'Supported order', value: 'Request accepted', note: 'Status appears in the enabled workflow' },
      ],
      outcome: 'Wait for clear confirmation. Availability, preparation time and fulfilment remain the seller’s responsibility.',
    },
    checklist: [
      { title: 'Check the seller details', body: 'Review the business name, area and public contact before continuing.' },
      { title: 'Confirm the final price', body: 'Ask about delivery fees, add-ons or other charges before committing.' },
      { title: 'Protect payment information', body: 'Never share a password, PIN or one-time code with a seller.' },
      { title: 'Keep the conversation and receipt', body: 'Retain useful order, booking and payment evidence until the request is complete.' },
    ],
    questions: [
      { question: 'Do I need an account to browse stores?', answer: 'Published stores and listings open in a browser. A compatible Shop account is required when the supported order or booking workflow asks you to continue in the app.' },
      { question: 'Does FahamPesa guarantee every seller?', answer: 'No. A published listing is not a guarantee of identity, stock, quality or delivery. Check the details and use the available support process.' },
      { question: 'Is a WhatsApp enquiry an order?', answer: 'No. It is a conversation with the seller. Use the supported in-app workflow when you need an order or booking record.' },
      { question: 'What should I do if a seller changes the price?', answer: 'Ask the seller to confirm the final amount before paying or travelling. Report misleading or unsafe listings through official FahamPesa support.' },
    ],
    related: [
      { label: 'Browse local businesses', href: '/business/shop', description: 'Explore current published stores and services.' },
      { label: 'Get the Shopper app', href: '/apps/shopper', description: 'Continue supported orders and bookings on Android.' },
      { label: 'Seller Help Centre', href: '/business/seller-help', description: 'See the listing standards sellers should follow.' },
      { label: 'Trust and support', href: '/trust', description: 'Read safety, privacy and support information.' },
    ],
    note: 'Confirm availability, fulfilment and payment details with the seller. Never share passwords, PINs or one-time security codes.',
  },
]

export const seoSolutionPaths = seoSolutionPages.map(page => `/business/${page.slug}`)

