import React, {useState, useMemo} from "react";
import {InvoiceService} from "../../../services/invoice.service";

function Title() {
    const [invoiceAmount, setInvoiceAmount] = useState(InvoiceService.getAllInvoices().length);

    useMemo(() => {
        setInvoiceAmount(InvoiceService.getAllInvoices().length);
    }, [])

    return (
        <div>
            <div className="head-L">Invoices</div>
            <div>There are {invoiceAmount} total invoices</div>
        </div>
    )
}

export default Title;