import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";
import LeaderBoard from "./LeaderBoard";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Main = () => {
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
        <Grid container sx={{ my: 1 }} spacing={3} borderColor = "green">
          <Grid item xs={8}>
          <Paper elevation={5} sx = {{px : 4, py : 2, backgroundColor : "#98FB98"}} >
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
