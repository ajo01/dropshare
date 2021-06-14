import React, { useState } from "react";
import styles from "./UploadContainer.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import LinkContainer from '../LinkContainer/LinkContainer'

const UploadContainer = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [initial, setInitial] = useState(true);
  const [url, setUrl] = useState('');

  // allowed file types. change later
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a png or jpeg image file");
    }
    setInitial(false);
  };

  const renderOutput = () => {
    if (initial) {
      return <div className={styles.fileInstruction}>Upload a file</div>;
    }
    return file ? (
        <div className={styles.fileName}>{file.name}</div>
    ) : (
      <div className={styles.error}>{error}</div>
    );
  };

  const renderProgress = () => {
    return (
      <div className={styles.progress_container}>
        <ProgressBar
          file={file}
          setFile={setFile}
          setUrl={setUrl}
        />
      </div>
    );
  };

  return (
    <section className={styles.upload_container}>
      <div className={styles.drop_zone}>
        <label className={styles.plusBtn}>
          <input type="file" id={styles.fileinput} onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className={styles.output}>{renderOutput()}</div>
      </div>
      {file && renderProgress()}
      <LinkContainer/>
      {/* <LinkContainer url={url}/> */}
    </section>
  );
};

export default UploadContainer;
