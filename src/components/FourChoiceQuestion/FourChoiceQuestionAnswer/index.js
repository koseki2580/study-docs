import React from "react";
import styles from "./styles.module.css";

export default function Answer({ answer, interpret, display = false }) {
  const displays = display === true ? "block" : "none";
  return (
    <div className={styles.answer_group} style={{ display: displays }}>
      <div className={styles.answer}>
        解答. <span className={styles.answer_text}>{answer}</span>
      </div>
      <div className={styles.interpret}>{interpret}</div>
    </div>
  );
}
