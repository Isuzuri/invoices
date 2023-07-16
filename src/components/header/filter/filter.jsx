import React, { useState } from 'react';
import styles from './filter.module.css';
function Filter() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    
    return (
        <div className={"head-S" + " " + styles.filter}>
            Filter by status
            <div className={`${styles.arrow} ${isActive ? styles.active : ''}`} onClick={handleClick}></div>
        </div>
    )
}

export default Filter;