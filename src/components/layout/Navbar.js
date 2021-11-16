import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPopUp } from "../../redux/actions/alert";
import { logout } from "../../redux/actions/auth";
import Theme from "../UI/Theme";
import DarkModeToggle from "react-dark-mode-toggle";
import {toggle} from "../../redux/actions/toggle";

export default function Navbar() {
  const {user} = useSelector((state) => state.auth);
  const toggle = useSelector(state => state.toggle)
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(toggle())
  }
  const handleLogout = () => {
    signOut(auth);
    dispatch(logout());
    dispatch(setPopUp("Logged Out", "success"));
  };
  return (
    <Theme>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Quizzer</Link>
            </Typography>
            <Button color="inherit">
              <Link to="/main">Play Quiz</Link>
            </Button>
            {user ? (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit">
                <Link to="/login">Register / Login</Link>
              </Button>
            )}
            <DarkModeToggle
              checked={toggle}
              size={60}
              onChange = {handleChange}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </Theme>
  );
}
