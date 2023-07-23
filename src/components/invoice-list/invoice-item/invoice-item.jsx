import styles from './invoice-item.module.css';
import InvoiceStatus from '../invoice-status/status';
import InvoiceId from './invoice-id';
import { Link } from 'react-router-dom';

function InvoiceItem({invoice}) {
    
    return (
        <Link to={`/invoice/${invoice.id}`} className={styles.item}>
            <InvoiceId id={invoice.id}/>
            <div>{invoice.issueDate}</div>
            <div>{invoice.billTo.clientName}</div>
            <div className={'head-S ' + styles.itemList}>{totalPrice(invoice.itemList)}</div>
            <InvoiceStatus className={invoice.status} />
            <div className={styles.openInvoice}></div>
        </Link>
    )
}

const totalPrice = (itemList) => {
    return itemList.reduce((total, item) => {
        return total + item.unitPrice * item.quantity;
    }, 0)
    
}

export default InvoiceItem;