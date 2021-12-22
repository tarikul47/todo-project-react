import React from "react";

const Button = (props) => {
  return (
    <div className={props.class}>
      <span>
        <i className={props.icon}></i>
      </span>
    </div>
  );
};

export default Button;
