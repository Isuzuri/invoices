import styles from './invoice-id.module.css';

function InvoiceId({id}) {
    return <div className={'head-S ' + styles.id}><span>#</span>{id}</div>
}

export default InvoiceId