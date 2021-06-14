import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <>
      <label className={styles.progressLabel}>Uploading...</label>
      <div
        className={styles.progress_bar}
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      ></div>
    </>
  );
};

export default ProgressBar;
