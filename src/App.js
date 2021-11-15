import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/Main/Auth/Login";
import Home from "./components/Main/Home";
import Main from "./components/Main/Main";
import { Alert } from "@mui/material";
import {useDispatch, useSelector} from "react-redux"
import {getAuth, onAuthStateChanged} from "@firebase/auth";
import {register} from "./redux/actions/auth";

function App() {
  const popups = useSelector(state => state.popup)
  const dispatch = useDispatch()
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       dispatch(register({name : user.displayName, email : user.email, highscore : user.phoneNumber}))
      }
      else {
        console.log("no user")
      }
    });
  }, [])
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
