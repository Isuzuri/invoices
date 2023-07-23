import styles from "./header.module.css";
import Interact from "./interact/interact";
import { Link } from "react-router-dom";
function InvoiceHeader({ invoice }) {
    return (
        <div className={styles.invoiceHead}>
            <Link to="/" className={"head-M " + styles.back}>Go Back</Link>
            <Interact invoice={invoice}/>
            <div className="info"></div>
        </div>
    )
}

export default InvoiceHeader