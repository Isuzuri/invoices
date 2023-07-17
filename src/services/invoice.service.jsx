import mockInvoices from "../components/header/mocks/invoice.mock";

export const InvoiceService = {
    getAllInvoices() {
        return mockInvoices;
    },

    getInvoiceById(id) {
        return mockInvoices.find((invoice) => invoice.id === id);
    }
}