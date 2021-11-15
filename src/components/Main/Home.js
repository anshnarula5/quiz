import React from "react";
import LeaderBoard from "./LeaderBoard";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Container
        sx={{
          width: { md: 700 },
          mx: { md: "auto",},
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
