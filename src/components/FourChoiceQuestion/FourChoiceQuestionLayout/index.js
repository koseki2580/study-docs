import React, { useState, useEffect, useRef } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Answer from "../FourChoiceQuestionAnswer";
import UnderButton from "../FourChoiceQuestionUnderButton";
import Rate from "../FourChoiceQuestionAnswerRate";
import Question from "../FourChoiceMain";

import styles from "./styles.module.css";

export default function FourChoiceQuestionLayout({
  created_by,
  created_at,
  datas,
}) {
  const correctAnswerCount = useRef(0);
  const answerCount = useRef(0);
  const [clickAnswer, setClickAnswer] = useState(false);
  const [checkedAnswer, setCheckedAnswer] = useState("none");

  const [questionNumber, setQuestionNumber] = useState(
    getRandomInt(datas.length)
  );
  const [displayAnswer, setDisplayAnswer] = useState(false);
  useEffect(() => {
    setClickAnswer(displayAnswer);
    if (displayAnswer === false) {
      setQuestionNumber(getRandomInt(datas.length));
      document
        .querySelector(`.${checkedAnswer}`)
        ?.classList.remove(checkedAnswer);
    }
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
        {...datas[questionNumber]}
        clickAnswer={clickAnswer}
        correctAnswerCount={correctAnswerCount}
        answerCount={answerCount}
        setCheckedAnswer={setCheckedAnswer}
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
