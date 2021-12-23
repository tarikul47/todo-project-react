import React from "react";

const Accordion = (props) => {
  return (
    <div className={props.class}>
      <span
        data-bs-toggle="collapse"
        data-bs-target={`#flush-collapse${props.id}`}
      >
        <i className={props.icon}></i>
      </span>
    </div>
  );
};

export default Accordion;
