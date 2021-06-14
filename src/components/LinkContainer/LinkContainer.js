import React from "react";
import styles from './LinkContainer.module.css'
import copyIcon from '../../img/copy-icon.svg'

const LinkContainer = ({url}) => {
    return (
        <div className={styles.container}>
            <label>Link expires in 24 hours</label>
            <br/>
            <div className={styles.linkContainer}>
            <label>{url} <img src={copyIcon} alt="copy-icon"></img></label>
            </div>
        </div>
    )
}

export default LinkContainer