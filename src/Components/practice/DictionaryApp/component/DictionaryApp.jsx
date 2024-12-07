/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Switch, withStyles } from "@mui/material";
// import {withStyles} from "@mui/styles"

import axios from "axios";
import Header from "./Header";
import Content from "./Content";
import { grey } from "@mui/material/colors";

const DictionaryApp = () => {
  const [data, setData] = useState([]);
  const [meanings, setMeanings] = useState("");
  const [category, setCategory] = useState("en");
  const [word, setWord] = useState("");
  const [ligthMode, setligthMode] = useState(false);

  //   switch from mui
  // const DarkMode = withStyles({
  //   switchBase: {
  //     color: grey[300],
  //     "&$checked": {
  //       color: grey[500],
  //     },
  //     "&$checked + &$track": {
  //       backgroundColor: grey[500],
  //     },
  //   },
  //   checked: {},
  //   track: {},
  // })(Switch);

  // function for dictionary api called which open source
  const dictionary = async () => {
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setData(res);
    } catch (error) {
      console.log("Error while fetching dictionary data", error.message);
    }
  };
  useEffect(() => {
    dictionary();
  }, [word, category]);

  console.log("meanings", meanings);
  console.log("data", data);
  
  return (
    <div
      className="app"
      style={{
        width: "100%",
        backgroundColor: ligthMode ? "#fff" : "#282c34",
        color: ligthMode ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          // justifyContent: "space-evenly",
        }}
      >
        {/* dark and light mode btn  */}
        <div
          style={{ position: "absolute", margin:15, top: 0, paddingTop: 10 }}
        >
          <span style={{color: ligthMode ? 'black' : 'white'}}>{ligthMode ? "Dark" : "Light"} Mode </span>
          {/* <DarkMode
            checked={ligthMode}
            onChange={() => setligthMode(!ligthMode)}
          /> */}

          <input type="checkbox" onClick={() => setligthMode(!ligthMode)}></input>
        </div>
        {/*  header componenet  */}
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          ligthMode={ligthMode}
        />
        {/* content component  */}
        {/* {meanings && ( */}
          <Content
            word={word}
            category={category}
            meanings={meanings}
            ligthMode={ligthMode}
          />
        {/* )} */}
      </Container>
    </div>
  );
};

export default DictionaryApp;
