import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Paper, TextField, Typography, Button } from "@mui/material";
import validator from "validator";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase-config";
import { useDispatch } from "react-redux";
import {setPopUp} from "../../../redux/actions/alert";

const Login = () => {
  
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = formData;
  const handleToggle = () => {
    setToggle((inital) => !inital);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleRegister = async () => {
    if (!validator.isEmail(email) || password.length < 6 || name.length === 0) {
      dispatch(
        setPopUp(
          "Enter Valid Credentials (Password length must be atleast 6)",
          "error"
        )
      );
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      dispatch(setPopUp(`Welcome, ${name}`, "success"));
    } catch (error) {
      dispatch(setPopUp(error.message, "error"));
    }
  };
  const handleLogin = async () => {
    if (!validator.isEmail(email) || password.length < 6) {
      dispatch(
        setPopUp(
          "Enter Valid Credentials (Password length must be atleast 6)",
          "error"
        )
      );
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setPopUp(`Welcome, ${result.displayName}`, "success"));
    } catch (error) {
      dispatch(setPopUp(error.message, "error"));
      return;
    }
  };
  // if (auth.currentUser) {
  //   return <Navigate to = "/"/>
  // }
  return (
    <div>
      <Paper
        sx={{
          width: { md: 400 },
          mx: "auto",
          mt: 5,
          display: "flex",
          flexDirection: "column",
          padding: 4,
        }}
      >
        <Typography variant="h3" align="center" sx={{ mb: 4 }}>
          {toggle ? "Signup" : "Login"}
        </Typography>

        {toggle && (
          <TextField
            value={name}
            onChange={handleChange}
            name="name"
            id="standard-basic"
            label="Name"
            variant="standard"
            sx={{ my: 2 }}
          />
        )}

        <TextField
          value={email}
          onChange={handleChange}
          name="email"
          id="standard-basic"
          label="Email"
          variant="standard"
          sx={{ my: 2 }}
        />

        <TextField
          sx={{ my: 2 }}
          value={password}
          id="standard-basic"
          label="Password"
          variant="standard"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <Typography align="center" sx={{ mt: 4 }}>
          {toggle ? "Already" : "Don't"} have an account ?{" "}
          <Button variant="text" onClick={handleToggle}>
            {!toggle ? "Sign Up" : "Login"}
          </Button>
        </Typography>
        {toggle ? (
          <Button variant="contained" onClick={handleRegister} sx={{ my: 3 }}>
            Register
          </Button>
        ) : (
          <Button variant="contained" onClick={handleLogin} sx={{ my: 3 }}>
            Login
          </Button>
        )}
      </Paper>
    </div>
  );
};

export default Login;
