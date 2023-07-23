import styles from "./header.module.css";
import Interact from "./interact/interact";
function InvoiceHeader({ invoice }) {
    return (
        <div className={styles.invoiceHead}>
            <button className={"head-M " + styles.back}>Go Back</button>
            <Interact invoice={invoice}/>
            <div className="info"></div>
        </div>
    )
}

export default InvoiceHeader