import { useEffect, useState } from "react";
import {InvoiceService} from "../../services/invoice.service";
import InvoiceItem from "./invoice-item/invoice-item";
import styles from "./invoice-list.module.css";

function InvoiceList() {
    const [invoiceList, setInvoiceList] = useState(InvoiceService.getAllInvoices());

    useEffect(() => {
        setInvoiceList(InvoiceService.getAllInvoices());
    })
    
    return (
        <div className={styles.list}>
            {invoiceList.map((invoice) => (
                <InvoiceItem key={invoice.id} invoice={invoice} />
            ))}
        </div>
    );
}

export default InvoiceList;