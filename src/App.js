import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Main/Home";
import Quiz from "./components/Main/Quiz";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/quiz" element={<Quiz />}/>
        </Routes>
      </Router>
    </div>
  );
} 

export default App;
