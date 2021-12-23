import React from "react";

const Button = (props) => {
  console.log(props)
  const handleClick = props.deleteTask ? props.deleteTask : props.editTask;
  return (
    <div className={props.classAttr}>
      <span onClick = {()=>{handleClick(props.id)}}>
        <i className={props.icon}></i>
      </span>
    </div>
  );
};

export default Button;
