import React from "react";

const SingleTask = (props) => {
  return (
    <div id={`flush-collapse${props.task.id}`} className="accordion-collapse collapse">
      <div style={{ backgroundColor: "#222" }} className="accordion-body tasks">
        {props.task.name} <br />
        {props.task.status} <br />
        {props.task.name}
        <br />
      </div>
    </div>
  );
};

export default SingleTask;
