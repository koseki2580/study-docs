import React, { useState, useEffect } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Answer from "../FourChoiceQuestionAnswer";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function FourChoiceQuestionUnderButton({ display = false }) {
  const displays = display === true ? "" : "none";
  return (
    <div
      className={`${clsx("col col--6")} ${styles.question_button}`}
      style={{ display: displays }}
    >
      <a className={`not-a-tag contents ${styles.btn}`}>
        <h3 className={styles.button_text}>前の問題</h3>
      </a>
      <a className={`not-a-tag contents ${styles.btn}`}>
        <h3 className={styles.button_text}>次の問題</h3>
      </a>
    </div>
  );
}
