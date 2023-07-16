import React, { useState } from 'react';
import styles from './filter.module.css';
function Filter() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    
    return (
        <div className={"head-S" + " " + styles.filter + " " + (isActive ? styles.active : '')} onClick={handleClick} >
            Filter by status
            <div className={styles.arrow}></div>
        </div>
    )
}

export default Filter;