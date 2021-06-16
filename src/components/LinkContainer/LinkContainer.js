import React from "react";
import styles from "./LinkContainer.module.css";
import copyIcon from "../../img/copy-icon.svg";
import useSignedUrl from '../../hooks/useSignedUrl'

const LinkContainer = ({ url, setShowToast, file }) => {
  
  const {signedUrl} = useSignedUrl(file)
  console.log('linkcontainer ' + signedUrl)

  const copyHandler = () => {
    navigator.clipboard.writeText(url);
    setShowToast(true);
  };

  return (
    <div className={styles.container}>
      <label>Link expires in 24 hours</label>
      <br />
      <div className={styles.linkContainer}>
        <label>{url}</label>
        <img src={copyIcon} alt="copy-icon" onClick={copyHandler}></img>
      </div>
    </div>
  );
};

export default LinkContainer;
