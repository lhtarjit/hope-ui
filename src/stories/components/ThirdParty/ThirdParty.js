import React from "react";
import "./ThirdParty.css";

function ThirdParty(props) {
  const { line1, line2, line3 } = props;
  return (
    <div className="tpcontainer">
      <text className="line1">{line1}</text>
      <div className="image-container">
        <img className="image" src="google.svg" alt="google"></img>
        <img className="image" src="facebook.svg" alt="facebook"></img>
        <img className="image" src="instagram.svg" alt="instagram"></img>
        <img className="image" src="linkedin.svg" alt="linkedin"></img>
      </div>
      <div className="line">
        <text className="line2">{line2}</text>
        <div className="line3">{line3}</div>
      </div>
    </div>
  );
}

export default ThirdParty;
