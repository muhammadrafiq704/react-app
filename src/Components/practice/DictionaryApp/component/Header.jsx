import React, { useState } from "react";
import "../css/Header.css";
import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";
import category from "../data/category";

const Header = (props) => {
  // console.log("props", props);
  
  //theme from mui
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: props.ligthMode ? "#000" : "#ffff",
      },
      type: props.ligthMode ? "light" : "dark",
    },
  });
  const handleChangeOptions = (lan) => {
    props.setCategory(lan);
    props.setWord("");
  };
  return (
    <div className="header">
      <span className="title" style={{color: props.ligthMode ? 'black' : 'white'}}>
        {props.word ? props.word : "Find Your Word"}{" "}
      </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
          // sx={{outlineColor: props.ligthMode ? 'black' : 'white'}}
            id="text"
            className="search"
            value={props.word}
            onChange={(e) => props.setWord(e.target.value)}
            label="Search a word..."
          />
          <TextField
            id="select"
            className="select"
            select
            label="Select"
            value={props.category}
            onChange={(e) => handleChangeOptions(e.target.value)}
          >
            {category.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
