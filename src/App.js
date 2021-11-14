import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/Main/Auth/Login";
import Home from "./components/Main/Home";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
