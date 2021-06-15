import React from "react";
import styles from "./ToastAlert.module.css";
import { motion } from "framer-motion";

const ToastAlert = () => {
  return (
    <motion.div
      className={styles.toastAlert}
      initial={{ y: 620 }}
      animate={{y: 580 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      Copied!
    </motion.div>
  );
};

export default ToastAlert;
