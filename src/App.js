import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/Main/Auth/Login";
import Home from "./components/Main/Home";
import Main from "./components/Main/Main";
import { Alert } from "@mui/material";
import {useSelector} from "react-redux"
function App() {
  const popups = useSelector(state => state.popup)
  return (
    <div className="App">
      <Navbar />
      {popups !== null &&
        popups.length !== 0 &&
        popups.map((alert) => (
            <Alert severity={alert.type}>{alert.message}</Alert>
        ))}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
