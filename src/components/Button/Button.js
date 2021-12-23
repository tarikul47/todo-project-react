import React from "react";

const Button = (props) => {
  console.log(props)
  return (
    <div className={props.classAttr}>
      <span onClick = {()=>{props.deleteTask(props.id)}}>
        <i className={props.icon}></i>
      </span>
    </div>
  );
};

export default Button;
