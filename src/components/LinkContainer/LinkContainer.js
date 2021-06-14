import React from "react";
import styles from './LinkContainer.module.css'

const LinkContainer = ({url}) => {
    return (
        <div className={styles.linkContainer}>
            <input type="text" id="fileURL" readOnly>{url}</input>
        </div>
    )
}

export default LinkContainer