import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";

const Popup = () => {
    const popups = useSelector(state => state.popup)
    console.log(popups)
  return (
    <>
      {popups !== null &&
        popups.length !== 0 &&
        popups.map((alert) => (
            <Alert severity={alert.type}>{alert.message}</Alert>
        ))}
    </>
  );
  
 
};

export default Popup;