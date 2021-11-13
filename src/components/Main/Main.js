import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid} from "@mui/material";
import { Container } from "@mui/material";

const Main = () => {
  const [quizData, setQuizData] = useState([]);
  const fetchData = () => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuizData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Container maxWidth="lg">
      <Grid container sx = {{my : 3}}  spacing={3}>
        <Grid item xs={8}>
          {quizData && quizData.response_code === 0 && (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Quiz data={quizData.results} />
              </CardContent>
            </Card>
          )}
        </Grid>
        <Grid item xs={4}>
          sadadad
        </Grid>
      </Grid>
      </Container>
    </>
  );
};

export default Main;
