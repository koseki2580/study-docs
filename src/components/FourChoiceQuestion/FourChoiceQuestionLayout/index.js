import React, { useState, useEffect } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Answer from "../FourChoiceQuestionAnswer";
import UnderButton from "../FourChoiceQuestionUnderButton";

import styles from "./styles.module.css";
import clsx from "clsx";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Test2({ question, answer, choice, interpret, tag }) {
  // tagで出題問題を選択できるようにした
  const test = styles.choice;
  const checked = styles.choice_checked;
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [answerCount, setAnswerCount] = useState(0);
  const [correctAnswerRate, setCorrectAnswerRate] = useState("0");
  let choiceBox = undefined;
  return (
    <div className={styles.fourchoicequestion}>
      <div>
        正解数/解答数: {correctAnswerCount} / {answerCount} ({correctAnswerRate}
        %)
      </div>
      <Answer
        answer={answer}
        interpret={interpret}
        display={displayAnswer}
      ></Answer>
      <div className={styles.question}>{question}</div>
      <div className={clsx("col col--6") + " not-a-tag"}>
        {choice.map((data, idx) => (
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

              choiceBox.forEach((element) => {
                element.style.pointerEvents = "none";
              });
              setDisplayAnswer(true);
              setAnswerCount(answerCount + 1);
              let add = 0;
              if (element.firstChild.textContent.includes(answer)) {
                setCorrectAnswerCount(correctAnswerCount + 1);
                add = 1;
              }
              setCorrectAnswerRate(
                (
                  ((correctAnswerCount + add) / (answerCount + 1)) *
                  100
                ).toPrecision(4)
              );
            }}
          >
            <h2 className="index-content-title">{alphabet[idx]}. </h2>
            <div className={styles.answer_choice}>{data}</div>
          </a>
        ))}
      </div>
      <UnderButton display={displayAnswer}></UnderButton>
    </div>
  );
}

export default function FourChoiceQuestionLayout({ path }) {
  // console.log(data);
  const [posts, setPosts] = useState([]);
  const url = useBaseUrl(path);
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);
  return (
    <div>
      {posts.datas &&
        posts.datas.map((props, idx) => <Test2 key={idx} {...props} />)}
    </div>
  );
}
