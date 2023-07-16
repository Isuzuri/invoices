import Title from './title/title';
import Button from '../../ui/button/Button';
import styles from './header.module.css';
import Filter from './filter/filter';

function Header() {

    return (
        <div className={styles.head}> 
            <Title />
            <div className={styles.interact}>
                <Filter />
                <Button className="newInvoice" text="New Invoice" />
            </div>
        </div>
    )
}

export default Header;