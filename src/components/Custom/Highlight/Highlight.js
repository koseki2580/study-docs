import React from "react";
import styles from "./styles.module.css";

export default function Highlight({ children, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "2px",
        color: "#fff",
        padding: "0.2rem",
      }}
    >
      {children}
    </span>
  );
}
