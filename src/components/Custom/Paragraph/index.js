import React from "react";
import styles from "./styles.module.css";

export default function Paragraph({ children }) {
  return <div className={`${styles.text_ward}`}>{children}</div>;
}
