import React, { useState } from "react";
import shortid from "shortid";

const TodoCreate = (props) => {
  const { onCreateTodo } = props;
  const [title, setTitle] = useState("");

  const CreateTodo = () => {
    if (title.length > 0) {
      onCreateTodo({
        id: shortid.generate(),
        name: title,
        status: "Incomplete",
        createdAt: new Date(),
      });
      setTitle('');
    }
  };

  return (
    <div className="addTask">
      <div className="input-group mb-3">
        <input
          type="text"
          id="task"
          className="form-control"
          placeholder="Please write todo"
          aria-label="Todo"
          aria-describedby="button-addon2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={(e) => CreateTodo()}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default TodoCreate;
