import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InvoiceService } from "../../services/invoice.service";
import styles from "./invoice-page.module.css";
import Interact from "./interact/interact";

function InvoicePage() {
    const { id } = useParams()
    const [ invoice, setInvoice ] = useState({})

    useEffect(() => {
        if (!id) return

        setInvoice(InvoiceService.getInvoiceById(id))
    }, [id])

    return (
        <div className={styles.invoice}>
            <button className={"head-M " + styles.back}>Go Back</button>
            <Interact invoice={invoice}/>
            <div className="info"></div>
        </div>
    )
}

export default InvoicePage;