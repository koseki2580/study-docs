import React, { useState, useEffect, useRef } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Answer from "../FourChoiceQuestionAnswer";
import UnderButton from "../FourChoiceQuestionUnderButton";
import Rate from "../FourChoiceQuestionAnswerRate";

import styles from "./styles.module.css";
import clsx from "clsx";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Question(props) {
  // tagで出題問題を選択できるようにした
  const test = styles.choice;
  const checked = styles.choice_checked;

  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [answerCount, setAnswerCount] = useState(0);
  let choiceBox = undefined;
  console.log(props.setDisplayAnswer);
  return (
    <>
      <div className={styles.question}>{props.question}</div>
      <div className={clsx("col col--6") + " not-a-tag"}>
        {props.choice.map((data, idx) => (
          <a
            key={idx + 1}
            className={`padding-horiz--md contents ${styles.choice}`}
            onClick={(e) => {
              e.stopPropagation();
              let element = e.currentTarget;
              element.classList.add(checked);
              console.log(element.firstChild.textContent);
              if (choiceBox === undefined)
                choiceBox = document.querySelectorAll(`.${test}`);
              props.setDisplayAnswer(true);
              choiceBox.forEach((element) => {
                element.style.pointerEvents = "none";
              });
              setAnswerCount(answerCount + 1);
              let add = 0;
              if (element.firstChild.textContent.includes(props.answer)) {
                setCorrectAnswerCount(correctAnswerCount + 1);
                add = 1;
              }
            }}
          >
            <h2 className="index-content-title">{alphabet[idx]}. </h2>
            <div className={styles.answer_choice}>{data}</div>
          </a>
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
  const questionNumber = useRef(getRandomInt(datas.length));
  const [displayAnswer, setDisplayAnswer] = useState(false);

  return (
    <div className={styles.fourchoicequestion}>
      <Rate
        correctAnswerCount={correctAnswerCount.current}
        answerCount={answerCount.current}
      ></Rate>
      <Answer
        answer={datas[questionNumber.current].answer}
        interpret={datas[questionNumber.current].interpret}
        display={displayAnswer}
      ></Answer>
      <Question
        key={"question"}
        {...datas[questionNumber.current]}
        setDisplayAnswer={setDisplayAnswer}
      />
      <UnderButton display={displayAnswer}></UnderButton>
    </div>
  );
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
