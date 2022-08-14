import React, { useState, useEffect, useRef } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Answer from "../FourChoiceQuestionAnswer";
import UnderButton from "../FourChoiceQuestionUnderButton";
import Rate from "../FourChoiceQuestionAnswerRate";

import styles from "./styles.module.css";
import clsx from "clsx";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Question(props) {
  const click = props.clickAnswer === false ? "all" : "none";
  return (
    <>
      <div className={styles.question}>{props.question}</div>
      <div className={`${clsx("col col--6")}`} style={{ pointerEvents: click }}>
        {props.choice.map((data, idx) => (
          <>
            <input
              type="radio"
              name="radio"
              id={`radio-${idx + 1}`}
              className={`${styles.radiobtn}`}
              onClick={(e) => {
                props.setDisplayAnswer(true);
              }}
            />
            <label
              htmlFor={`radio-${idx + 1}`}
              className={`padding-horiz--md contents ${styles.choice} ${styles.radiolabel}`}
              id={"test"}
            >
              <h2 className="index-content-title">{alphabet[idx]}. </h2>
              <div className={styles.answer_choice}>{data}</div>
            </label>
          </>
        ))}
      </div>
    </>
  );
}

export default function FourChoiceQuestionLayout({
  created_by,
  created_at,
  datas,
}) {
  console.log(created_at);
  console.log(created_by);
  console.log(datas);
  const correctAnswerCount = useRef(0);
  const answerCount = useRef(0);
  const [clickAnswer, setClickAnswer] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(
    getRandomInt(datas.length)
  );
  const [displayAnswer, setDisplayAnswer] = useState(false);
  useEffect(() => {
    setClickAnswer(displayAnswer);
    if (displayAnswer === false) setQuestionNumber(getRandomInt(datas.length));
  }, [displayAnswer]);

  return (
    <div className={styles.fourchoicequestion}>
      <Rate
        correctAnswerCount={correctAnswerCount.current}
        answerCount={answerCount.current}
      ></Rate>
      <Answer
        // key={"answer"}
        answer={datas[questionNumber].answer}
        interpret={datas[questionNumber].interpret}
        display={displayAnswer}
      ></Answer>
      <Question
        key={"question"}
        {...datas[questionNumber]}
        clickAnswer={clickAnswer}
        setDisplayAnswer={setDisplayAnswer}
      />
      <UnderButton
        display={displayAnswer}
        setDisplayAnswer={setDisplayAnswer}
      ></UnderButton>
    </div>
  );
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
