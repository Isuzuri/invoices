import styles from './invoice-item.module.css';
import InvoiceStatus from '../invoice-status/status';
import InvoiceId from './invoice-id';

function InvoiceItem({invoice}) {
    
    return (
        <div className={styles.item}>
            <InvoiceId id={invoice.id}/>
            <div>{invoice.issueDate}</div>
            <div>{invoice.billTo.clientName}</div>
            <div className={'head-S ' + styles.itemList}>{totalPrice(invoice.itemList)}</div>
            <InvoiceStatus className={invoice.status} />
            <div className={styles.openInvoice}></div>
        </div>
    )
}

const totalPrice = (itemList) => {
    return itemList.reduce((total, item) => {
        return total + item.unitPrice * item.quantity;
    }, 0)
    
}

export default InvoiceItem;