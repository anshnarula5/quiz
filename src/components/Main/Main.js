import React, {useEffect, useState} from "react";
import Quiz from "./Quiz";

const Main = () => {
  const [quizData, setQuizData] = useState([])
  const fetchData = () => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(res => res.json())
    .then(data => setQuizData(data))
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      {quizData && quizData.response_code === 0 && <Quiz data={quizData.results}/>}
    </>
  );
};

export default Main;
