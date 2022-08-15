import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Main(props) {
  const click = props.clickAnswer === false ? "all" : "none";
  props.setCheckedAnswer(styles.checked);
  return (
    <>
      <div className={styles.question}>{props.question}</div>
      <div className={`${clsx("col col--6")}`} style={{ pointerEvents: click }}>
        {props.choice.map((data, idx) => (
          <label
            key={`click-${idx}`}
            id={`click-${idx}`}
            className={`padding-horiz--md contents ${styles.choice} ${styles.radiolabel}`}
          >
            <input
              type="radio"
              name="radio"
              className={`${styles.radiobtn}`}
              onClick={(e) => {
                props.setDisplayAnswer(true);
                e.target.parentNode.classList.add(styles.checked);
              }}
            />
            <h2 className="index-content-title">{alphabet[idx]}. </h2>
            <div className={styles.answer_choice}>{data}</div>
          </label>
        ))}
      </div>
    </>
  );
}
