import React from "react";
import styles from "./LinkContainer.module.css";
import copyIcon from "../../img/copy-icon.svg";
import TinyURL from "tinyurl";

const LinkContainer = ({ url }) => {
    TinyURL.shorten(url).then(function(res) {
        console.log(res)
    }, function(err) {
        console.log(err)
    })

  return (
    <div className={styles.container}>
      <label>Link expires in 24 hours</label>
      <br />
      <div className={styles.linkContainer}>
        <label>{url}</label>
        <img src={copyIcon} alt="copy-icon"></img>
      </div>
    </div>
  );
};

export default LinkContainer;
