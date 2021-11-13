import React, { useState } from "react";
import { decode } from "html-entities";

import { Button } from "@mui/material";

const Quiz = ({ data }) => {
  const [question, setQuestion] = useState("");
  const [qNo, setQNo] = useState(0);
  const [answer, setAnswer] = useState("")

  const nextQ = () => {setQNo((initial) => initial + 1);};
  
  const handleSelect = (option) => {
        setAnswer(option)
    }
    const options = [...data[qNo].incorrect_answers, data[qNo].correct_answer];
  return (
    <>
      <h1>Question {qNo + 1}</h1>
      <h1>{decode(data[qNo].question)}</h1>
      <div>
          <Button variant = {answer !== options[0] ? "outlined" : "contained"}
                sx={{
                    display: "block", width: "20rem",p: 2, my: 2}}
                    onClick = {() => handleSelect(options[0])}>
            {options[0]}
          </Button>
          <Button variant = {answer !== options[1] ? "outlined" : "contained"}
                sx={{
                    display: "block", width: "20rem",p: 2, my: 2}}
                    onClick = {() => handleSelect(options[1])}>
            {options[1]}
          </Button>
          <Button variant = {answer !== options[2] ? "outlined" : "contained"}
                sx={{
                    display: "block", width: "20rem",p: 2, my: 2}}
                    onClick = {() => handleSelect(options[2])}>
            {options[2]}
          </Button>
          <Button variant = {answer !== options[3] ? "outlined" : "contained"}
                sx={{
                    display: "block", width: "20rem",p: 2, my: 2}}
                    onClick = {() => handleSelect(options[3])}>
            {options[3]}
          </Button>
      </div>
      <div>
        <Button variant="outlined" color="success"  sx={{ width: "5rem", p: 1, mx: 2 }}>
          Submit
        </Button>
        <Button variant="outlined"  sx={{ width: "5rem", p: 1, mx: 2 }}  onClick={nextQ}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Quiz;
