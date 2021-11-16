import React from "react";
import LeaderBoard from "./LeaderBoard";
import {Container, Grid, Typography} from "@mui/material";
import quiz from "../../img/quiz.svg"

const Home = () => {
  return (
    <div>
        <Grid container spacing={2} align = "center" sx = {{mt : 4}}>
          <Grid item xs={6}>
            <Typography variant="h1">Quizzer.</Typography>
            <Typography variant="h4" my = {3}>Play Quiz.</Typography>
            <Typography variant="h4" my = {3}>See youself on leaderboard.</Typography>
          </Grid>
          <Grid item xs={6}>
          <img src={quiz} alt="" style={{maxWidth : "75%"}}/>
          </Grid>
        </Grid>
      <Container
        sx={{
          width: { md: 700 },
          mx: { md: "auto" },
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
        }}
      >
        <LeaderBoard />
      </Container>
    </div>
  );
};

export default Home;
