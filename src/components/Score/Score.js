import React from "react";
import "./Score.css";


function Score (props) {
    return <div className="dragonTournament">
      <h1 className="title">DRAGON BALL Z TOURNAMENT {props.title}</h1>
      <h4 className="rules">CLICK A PICTURE TO BEGIN{props.rules}</h4>
      <h3 className="total">Total: {props.total}</h3>
      
    </div>
};



export default Score;

