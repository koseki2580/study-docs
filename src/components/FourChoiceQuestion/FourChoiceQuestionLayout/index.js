import React, { useState, useEffect } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Answer from "../FourChoiceQuestionAnswer";
import UnderButton from "../FourChoiceQuestionUnderButton";

import styles from "./styles.module.css";
import clsx from "clsx";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Test2({ question, answer, choice, interpret, tag }) {
  // tagで出題問題を選択できるようにした
  let after_ans = false;
  const test = styles.choice;
  return (
    <div className={styles.fourchoicequestion}>
      <div>正解数/解答数: 0 / 0 (0%)</div>
      <Answer
        answer={answer}
        interpret={interpret}
        display={after_ans}
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
              console.log(e);
              console.log(element.parentNode);
              // while (element.tagName !== "A") {
              //   element = element.parentNode;
              // }
              let box = document.querySelectorAll(`.${test}`);
              console.log(box);
              box.pointerEvents = "none";
            }}
          >
            <h2 className="index-content-title">{alphabet[idx]}. </h2>
            <div className={styles.answer_choice}>{data}</div>
          </a>
        ))}
      </div>
      <UnderButton display={after_ans}></UnderButton>
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
