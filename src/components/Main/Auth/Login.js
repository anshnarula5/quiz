import React, { useState } from "react";
import {Paper, TextField, Typography, Button} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase-config";

const Login = () => {
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
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      user.updateProfile({
        displayName: name
      })
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
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
        <Button onClick = {register}>Login</Button>
      </Paper>
    </div>
  );
};

export default Login;
