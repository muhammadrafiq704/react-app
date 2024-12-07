import React from "react";
import '../../../css/LightDarkMode/card.css'
const Card = () => {

  return (
    <div className="card">
      <a href="/">
        <img src="/logo192.png" alt="card-img" />
      </a>
      <div className="inner-div">
        <h5>Hello! React Developers</h5>
        <button type="button">Let's Connect</button>
      </div>
    </div>
  );
};

export default Card;
