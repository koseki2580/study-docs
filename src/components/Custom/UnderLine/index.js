import React from "react";
import styles from "./styles.module.css";

export default function UnderLine({ children, color, style, px }) {
  let lineStyle;
  switch (style) {
    case "double": {
      lineStyle = "double";
      break;
    }
    case "dashed": {
      lineStyle = "dashed";
      break;
    }
    case "dotted": {
      lineStyle = "dotted";
      break;
    }
    default: {
      lineStyle = "solid";
      break;
    }
  }
  const lineColor = color === undefined ? "black" : color;
  const lineSize = isNaN(px) === true ? 1 : px;
  return (
    <span
      style={{
        borderBottom: `${lineSize}px ${lineStyle} ${lineColor}`,
      }}
    >
      {children}
    </span>
  );
}
