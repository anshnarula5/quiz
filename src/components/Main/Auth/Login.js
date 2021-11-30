import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Paper, TextField, Typography, Button } from "@mui/material";
import validator from "validator";
import GoogleIcon from "@mui/icons-material/Google";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {  auth} from "../../../firebase-config";
import { useDispatch } from "react-redux";
import { setPopUp } from "../../../redux/actions/alert";
import {register} from "../../../redux/actions/auth";
import Theme from "../../UI/Theme";

const Login = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = formData;
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        dispatch(
          register({ name: result.user.displayName, email: result.user.email })
        );
        dispatch(setPopUp(`Welcome, ${result.user.displayName}`, "success"));
      })
      .catch((err) => console.log(err));
  };
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
        
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      dispatch(
        register({ name: result.user.displayName, email: result.user.email })
      );
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
      console.log(result);
      dispatch(
        register({ name: result.user.displayName, email: result.user.email })
      );
      dispatch(setPopUp(`Welcome, ${result.user.displayName}`, "success"));
    } catch (error) {
      dispatch(setPopUp(error.message, "error"));
      return;
    }
  };

  if (auth.currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <Theme>
      <Paper
        sx={{
          width: { md: 400 },
          mx: { md: "auto", xs: 1 },
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

        <Button variant="contained" onClick={handleGoogleAuth} sx={{ mb: 3 }}>
          <GoogleIcon />{" "}
          <Typography sx={{ mx: 2 }}> Sign in with Google</Typography>
        </Button>
      </Paper>
    </Theme>
  );
};

export default Login;
