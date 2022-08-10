import React, { useState, useEffect, useRef } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Answer from "../FourChoiceQuestionAnswer";
import UnderButton from "../FourChoiceQuestionUnderButton";

import styles from "./styles.module.css";
import clsx from "clsx";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function FourChoiceQuestionAnswerRate(props) {
  return (
    <>
      正解数/解答数: {props.correctAnswerCount} / {props.answerCount} (
      {props.answerCount !== 0
        ? ((props.correctAnswerCount / props.answerCount) * 100).toPrecision(4)
        : 0}
      %)
    </>
  );
}
