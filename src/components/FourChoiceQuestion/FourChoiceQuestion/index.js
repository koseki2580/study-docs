import React, { useState, useEffect } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import FourChoiceQuestionLayout from "../FourChoiceQuestionLayout";
export default function FourChoiceQuestion({ path }) {
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
  return <>{posts.datas && <FourChoiceQuestionLayout {...posts} />}</>;
}
