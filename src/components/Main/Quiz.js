import React, { useState } from "react";
import { decode } from "html-entities";

import { Button, Grid } from "@mui/material";
import {setAlert} from "../../redux/actions/alert";

import { useDispatch } from "react-redux";
import {Box} from "@mui/system";

const Quiz = ({data}) => {
  const dispatch = useDispatch()
  const [question, setQuestion] = useState("");
  const [qNo, setQNo] = useState(0);
  const [answer, setAnswer] = useState("")
  const [submit, setSubmit] = useState(false)
  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState(false)
  const options = [...data[qNo].incorrect_answers, data[qNo].correct_answer];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
  
    const handleSubmit = () => {
        setSubmit(true)
        if (answer === data[qNo].correct_answer) {
            setCorrect(true)
          setScore(initial => initial + 1)
          dispatch(setAlert("#98FB98"))
      }
        else {
          dispatch(setAlert("#FFA29E "))
      }
    }

  const nextQ = () => {
    setQNo((initial) => initial + 1);
    dispatch(setAlert(""))
    
  };
    
  const handleSelect = (option) => {
        setAnswer(option)
    }
  const handleNext = () => {
        nextQ()
        setAnswer("")
      setSubmit(false)
    }
  
  return (
    <>
      {qNo !== 10 ? 
      <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Question {qNo + 1}</h3>
        <h3>Score : {score}</h3>
      </Box>
      <h2>{decode(data[qNo].question)}</h2>
      <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center">
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', my : 2}}>
          <Button variant = {answer !== options[0] ? "outlined" : "contained"} disabled = {submit ? true : false}  
                sx={{
                    width: "20rem",p: 2, my: 1}}
                    onClick = {() => handleSelect(options[0])} >
            {decode(options[0])}
          </Button>
          <Button variant = {answer !== options[1] ? "outlined" : "contained"} disabled = {submit ? true : false} 
                sx={{
                    width: "20rem",p: 2, my: 1}}
                    onClick = {() => handleSelect(options[1])}>
            {decode(options[1])}
          </Button>
          <Button variant = {answer !== options[2] ? "outlined" : "contained"} disabled = {submit ? true : false} 
                sx={{
                    width: "20rem",p: 2, my: 1}}
                    onClick = {() => handleSelect(options[2])}>
            {decode(options[2])}
          </Button>
          <Button variant = {answer !== options[3] ? "outlined" : "contained"} disabled = {submit ? true : false} 
                sx={{
                    width: "20rem",p: 2, my: 1}}
                    onClick = {() => handleSelect(options[3])}>
            {decode(options[3])}
          </Button>
      </Box >
      </Grid>
      <Grid container justifyContent="flex-end" sx ={{my : 2}}>
        <Button variant="contained" color="success"  sx={{ width: "5rem", p: 1, mx: 2 }} disabled = {!answer ? true: false} onClick = {handleSubmit}>
          Submit
        </Button>
        <Button variant="contained"  sx={{ width: "5rem", p: 1, mx: 2 }}  onClick={handleNext} disabled = {!submit ? true: false}  >
          Next
        </Button>
      </Grid></> :
      <>
         <h1>Thank you for playing</h1>
         <h3>Your Score : {score}</h3>
         <Button variant="outlined"  sx={{ width: "10rem", p: 1, mx: 2 }}>
          Play again
        </Button>          
      </>}
    </>
  );
};

export default Quiz;
