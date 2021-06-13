import React, { useState } from "react";
import styles from "./UploadContainer.module.css";

const UploadContainer = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  // allowed file types. change later
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      console.log(selected);
    } else {
      setFile(null);
      setError("Please select a png or jpeg image file");
    }
  };

  return (
    <section className={styles.upload_container}>
      <div className={styles.drop_zone}>
        <label>
          <input type="file" id={styles.fileinput} onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className={styles.output}>
          {file ? (
            <div className={styles.fileName}>{file.name}</div>
          ) : (
            <div className={styles.error}>{error}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadContainer;
