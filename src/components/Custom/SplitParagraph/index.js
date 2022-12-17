import React from "react";
import styles from "./styles.module.css";

export default function SplitParagraph({ children, border }) {
  return (
    <span
      className={`${styles.split} ${
        border === "false" ? styles.border_none : ""
      }`}
    >
      {children}
    </span>
  );
}
