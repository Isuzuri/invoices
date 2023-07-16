import styles from "./button.module.css";

function Button(props) {
    if (props.className === 'newInvoice') {
        return <button onClick={props.onClick} className={styles[props.className]}> <div className={styles.icon}><span>+</span></div> {props.text} </button>
    } else return <button onClick={props.onClick} className={styles[props.className]}> {props.text} </button>
}

export default Button;