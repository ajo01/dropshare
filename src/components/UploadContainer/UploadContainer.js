import React from "react";
import fileImg from '../../img/file.svg'
import styles from './UploadContainer.module.css'

const UploadContainer = () => {
  return (
    <section className={styles.upload_container}>
      <div class={styles.drop_zone}>
        <div class={styles.icon_container}>
          <img
            src={fileImg}
            alt="file-icon"
            class={styles.center}
            draggable="false"
          />
          <img
            src={fileImg}
            alt="file-icon"
            class={styles.left}
            draggable="false"
          />
          <img
            src={fileImg}
            alt="file-icon"
            class={styles.right}
            draggable="false"
          />
        </div>
        <input type="file" id={styles.fileinput}/>
        <div class="title">Drop your files here or <span class={styles.browseBtn}>browse</span></div>
      </div>
    </section>
  );
};

export default UploadContainer;
