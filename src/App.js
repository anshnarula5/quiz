import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/Main/Auth/Login";
import Home from "./components/Main/Home";
import Main from "./components/Main/Main";
import { Alert, Paper} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { register } from "./redux/actions/auth";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "./firebase-config";

function App() {
  const popups = useSelector((state) => state.popup);
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);
  const auth = getAuth();
  

  useEffect(() => {
    const getData = async (name) => {
      try {
        const docRef = doc(db, "users", name);
        const docSnap = await getDoc(docRef);
        console.log(docSnap);
        dispatch(
          register({
            name: name,
            highscore: docSnap?.data()?.hs || 0,
          })
        );
      } catch {
        dispatch(
          register({
            name: name,
            highscore: 0,
          })
        );
      }
    };
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getData(user.displayName);
      } else {
        console.log("");
      }
    });
  }, [ auth]);
  return (
    <Paper
      className="App"
      style={{
        backgroundColor: toggle ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.02)",
      }}
    >
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
    </Paper>
  );
}

export default App;
