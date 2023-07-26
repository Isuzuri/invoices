import NewInvoiceForm from "../components/header/forms/new-invoice.form.jsx/new-invoice";
import Header from "../components/header/header";
import InvoiceList from "../components/invoice-list/invoice-list";

function Home() {
    return (
        <div>
            <Header />
            <InvoiceList />
            <NewInvoiceForm />
        </div>
    )
}

export default Home;