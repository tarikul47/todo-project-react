import React, { useState } from "react";

const CreateTask = ({ addNewTask }) => {
  const [text, setText] = useState("");
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
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => {
            if (text) {
              addNewTask(text);
              setText("");
            } else {
              alert("Please input task name");
            }
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
