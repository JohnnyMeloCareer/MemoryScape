import React from "react";
import "./SkillCard.css";

const SkillCard = props => (

  <div
    className="card"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
  <div className="img-container">
  <img className="click-item" alt={props.name} src={props.image} /> 
  </div>
    </div>
);

export default SkillCard;
