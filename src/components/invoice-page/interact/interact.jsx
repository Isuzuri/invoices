import styles from "./interact.module.css";
import InvoiceStatus from "../../invoice-list/invoice-status/status";
import Button from "../../../ui/button/Button";

function Interact({ invoice }) {
    return (
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
    )
}

export default Interact