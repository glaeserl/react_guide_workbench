import React from "react";
import "./Card.css";

function Card(props) {
  //need this to add more css classes
  const classes = "card " + props.className;
  //have to add anything inside the div tags
  return <div className={classes}>{props.children}</div>;
}

export default Card;
