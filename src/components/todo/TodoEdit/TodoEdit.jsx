import React, { useState } from "react";

const TodoEdit = (props) => {
  const { onUpdateTodo, todo, index } = props;
  const [title, setTitle] = useState(todo.name);

  const editTodo = () => {
    if (title.length > 0) {
      onUpdateTodo({
        index: index,
        todo: {
          name: title,
          status: "",
        },
      });
    }
  };
  console.log(todo);
  return (
    <div className="input-group">
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
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={(e) => editTodo()}
      >
        save
      </button>
    </div>
  );
};

export default TodoEdit;
