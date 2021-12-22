import React from "react";

const createTask = (props) => {
  //console.log(props);
  return (
    <div className="addTask">
      <div className="input-group mb-3">
        <input
          type="text"
          id="task"
          className="form-control"
          placeholder="Todo"
          aria-label="Todo"
          aria-describedby="button-addon2"
          value={props.task}
          onChange={props.inputOnChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={props.addTaskHandle}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default createTask;
