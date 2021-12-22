import React from "react";

const createTask = (props) => {
  return (
    <div className="addTask">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Todo"
          aria-label="Todo"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={props.addTask}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default createTask;
