import { Button } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../css/conditionalrendering.css";

const ConditionalRendering = (props) => {
  const [show, setShow] = useState(true);
  const [showBtn, setShowBtn] = useState(true);

  //useMemo hook also use for code optimization probablly when large calculations happened
  function value() {
    const value = props.hello;
    console.log("value", value);
  }
  const Memorized = useMemo(() => {
    value();
  }, []);
  
  // code optimization methode when using addEventListener
  //useCallBack hook
  //useEffect hook
  const handleOptimization = useCallback(() => {
    console.log("loaded");
  }, []);
  useEffect(() => {
    window.addEventListener("loader", handleOptimization);
    console.log("mounted useEffect");
    // useEffect cleanup function
    return () => {
      window.removeEventListener("loader", handleOptimization);
    };
  }, [props.hello, handleOptimization]);

  const [todos, setTodos] = useState([
    {
      title: "Todo 1",
      desc: "Todo 1 is done by rafiq",
    },
    {
      title: "Todo 2",
      desc: "Todo 2 is done by jaffer",
    },
    {
      title: "Todo 3",
      desc: "Todo 2 is done by farukh",
    },
  ]);

  const Todo = ({ todo }) => {
    return (
      <div className="todo">
        <div className="todo-tittle">{todo.title}</div>
        <div>{todo.desc}</div>
      </div>
    );
  };

  return (
    <>
      <div className="main-div">
        <div>
          <h2>Conditional Rendering</h2>
        </div>
        <div>
          {showBtn && (
            <Button
              className="show-btn"
              color="info"
              variant="contained"
              onClick={() => setShow(!show)}
            >
              Toggle Show
            </Button>
          )}
        </div>
        <div className="todo-div">
          {show
            ? todos?.map((todo) => {
                return (
                  <div key={todo.title} className="todo">
                    <div className="todo-tittle">{todo.title}</div>
                    <div>{todo.desc}</div>
                  </div>
                );
                // <Todo todo={todo} />;
              })
            : "hello! Todos is empty now"}
        </div>
      </div>
    </>
  );
};

export default ConditionalRendering;
