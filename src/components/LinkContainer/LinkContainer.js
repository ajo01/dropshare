import React from "react";
import styles from './LinkContainer.module.css'

const LinkContainer = ({url}) => {
    return (
        <div className={styles.container}>
            <label>Link expires in 24 hours</label>
            <br/>
            <div className={styles.linkContainer}>
            <label id="fileURL">{url} </label>
            </div>
        </div>
    )
}

export default LinkContainer