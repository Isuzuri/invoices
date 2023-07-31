import mockInvoices from "../components/header/mocks/invoice.mock";

export const InvoiceService = {

    getAllInvoices() {
        return mockInvoices;
    },

    getInvoiceById(id) {
        return mockInvoices.find((invoice) => invoice.id === id);
    },
    
    addInvoice(invoiceData, items) {
        const newInvoice = {
            id: generateRandomId(),
            status: "Draft",
            billFrom: {
                streetAddress: invoiceData.billFromStreetAddress,
                city: invoiceData.billFromCity,
                postCode: invoiceData.billFromPostCode,
                country: invoiceData.billFromCountry,
            },
            billTo: {
                clientName: invoiceData.clientName,
                clientEmail: invoiceData.clientEmail,
                streetAddress: invoiceData.billToStreetAddress,
                city: invoiceData.billToCity,
                postCode: invoiceData.billToPostCode,
                country: invoiceData.billToCountry,
            },
            issueDate: new Date(invoiceData.invoiceDate).toDateString(),
            paymentTerms: invoiceData.paymentTerms,
            itemList: items.map(e => {
                return {
                    name: e.name,
                    quantity: e.quantity,
                    unitPrice: e.unitPrice,
                }
            })
        }
        mockInvoices.push(newInvoice);
        console.log(mockInvoices);
    }
}

const generateRandomId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 6; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  }