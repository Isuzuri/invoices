import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InvoiceService } from "../../services/invoice.service";
import Button from "../../ui/button/Button";
import InvoiceStatus from "../invoice-list/invoice-status/status";
import styles from "./invoice-page.module.css";

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
            <div className={styles.invoiceInteract}>
                <div className={styles.status}>
                    <span className="head-S">Status:</span>
                    <InvoiceStatus className={invoice.status}/>
                </div>
                <div className={styles.btns}>
                    <Button className="edit" text="Edit" />
                    <Button className="delete" text="Delete" />
                    <Button className="markAsPaid" text="Mark as Paid" />
                </div>
            </div>
            <div className="info"></div>
        </div>
    )
}

export default InvoicePage;