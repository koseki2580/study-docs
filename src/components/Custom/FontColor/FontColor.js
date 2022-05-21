import React from "react";
import styles from "./styles.module.css";

export default function FontColor({ children, color }) {
  return (
    <span
      style={{
        color: color,
      }}
    >
      {children}
    </span>
  );
}
