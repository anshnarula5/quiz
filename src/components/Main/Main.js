import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";
import LeaderBoard from "./LeaderBoard";

import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { Button, Typography } from "@mui/material"
import { Navigate } from "react-router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const color = useSelector(state => state.alert.payload)
  const user = useSelector((state) => state.auth.user);
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
    <><Container >
        <Grid container sx={{ my: 2}} spacing = {2}>
          <Grid item md={8}>
          <Paper elevation={5} sx = {{px : {md : 4, sm : 2}, py : 2, backgroundColor : color , minHeight : 600 }} >
                {user && quizData.length === 0 && (
                  <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', mt : 25 }}>
                    <CircularProgress />
                  </Box>
            )}
             {
                !user && 
                  <Container
                    sx={{
                      mx: { md: "auto", xs: 1 },
                      mt: 5,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: 4,
                    }}
                  >
                    <h1>
                      <LockOutlinedIcon fontSize="large" />
                    </h1>
                    <Typography variant="h3" sx={{ my: 5 }}>
                      You need to login first.
                    </Typography>
                    <Link to="/login">
                      <Button variant="contained" sx={{ my: 5, width: { md: 400 } }}>
                        Login
                      </Button>
                    </Link>
                  </Container>}
                {user && quizData && quizData.response_code === 0 && (
                  <Quiz data={quizData.results} />
                )}
                </Paper>
          </Grid>
          <Grid item md={4}>
            <LeaderBoard />
          </Grid>
      </Grid>
      </Container>
    </>
  );
};

export default Main;
