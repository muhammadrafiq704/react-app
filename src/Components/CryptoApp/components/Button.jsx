import React from "react";

const Button = ({ children, selected, onClick }) => {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "1px solid gold",
        borderRadius: 8,
        padding: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "monospace",
        cursor: "pointer",
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "white",
        fontWeight: selected ? 700 : 500,
        width: "22%",
      }}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Button;
