import React, {useState} from "react";
import {Paper, TextField, Typography, Button} from "@mui/material";
import firebase from "../../../firebase";

const Login = () => {
    const [toggle, setToggle] = useState(false)
    const [formData, setFormData] = useState({name : "", email : "", password : ""})
    const {name, email, password} = formData
    const handleToggle = () => {
        setToggle(inital => !inital)
    }
    const handleChange = (e) => {
        setFormData({...setFormData, [e.target.value] : e.target.name})
    }
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
          ><h2>{name, email, password}</h2>
          <Typography variant = "h3" align = "center" sx = {{mb : 4}}>{toggle ? "Signup" : "Login"}</Typography>

              {toggle && <TextField value = {name}  onChange = {handleChange}  name = "name" id="standard-basic" label="Name" variant="standard" sx={{my: 2}} />}

        <TextField value = {email} onChange = {handleChange}  name = "email" id="standard-basic" label="Email" variant="standard" sx = {{my : 2}} />

        <TextField  sx = {{my : 2}}
        value = {password}
          id="standard-basic"
          label="Password"
          variant="standard"
          name = "password"
          type="password"
          onChange = {handleChange}
        />
              <Typography align="center" sx={{mt: 4}}>{toggle ? "Already" : "Don't"} have an account ? <Button variant="text" onClick={handleToggle}>{!toggle ? "Sign Up" : "Login"}</Button></Typography>
      </Paper>
    </div>
  );
};

export default Login;
