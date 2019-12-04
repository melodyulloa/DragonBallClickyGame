import React from "react";
import "./dragonBall.css";


function dragonBall(props) {
    return (
      <div className="dragon img-container">
            <img alt={props.name} src={props.image} id={props.id}
            onClick={() => props.shuffleDragon(props.id)} className='shuffleDragon' />
            
        </div>
         
    );
  }


export default dragonBall;

