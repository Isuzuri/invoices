import styles from './status.module.css'

function InvoiceStatus(props) {
    return (
        <div className={"head-S " + styles.status + " " + styles[props.className]}> <div></div> {props.className}</div>
    )
}

export default InvoiceStatus;