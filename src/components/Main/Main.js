import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";
import LeaderBoard from "./LeaderBoard";

import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { useSelector } from "react-redux";

const Main = () => {
  const color = useSelector(state => state.alert.payload)
  console.log(color)
  const [quizData, setQuizData] = useState([]);
  const fetchData = () => {
    fetch("https://opentdb.com/api.php?amount=11&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuizData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <Grid container sx={{ my: 1}} spacing={3}>
          <Grid item xs={8}>
          <Paper elevation={5} sx = {{px : 4, py : 2, backgroundColor : color , minHeight : 600 }} >
                {quizData.length === 0 && (
                  <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', mt : 25 }}>
                    <CircularProgress />
                  </Box>
                )}
                {quizData && quizData.response_code === 0 && (
                  <Quiz data={quizData.results} />
                )}
                </Paper>
          </Grid>
          <Grid item xs={4}>
            <LeaderBoard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
