import React, { useState } from "react";

const TodoEdit = (props) => {
  const { onUpdateTodo, todo, index } = props;
  const [title, setTitle] = useState(todo.name);
  const [status, setStatus] = useState(todo.status);

  const editTodo = () => {
    if (title.length > 0) {
      onUpdateTodo({
        index: index,
        todo: {
          name: title,
          status,
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
      <select
        class="form-select form-select-sm"
        aria-label=".form-select-sm example"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option selected>Select Status</option>
        <option value="Complete">Complete</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      <div className="delete save">
        <span onClick={() => editTodo(index)}>
          <i className="fas fa-save"></i>
        </span>
      </div>
    </div>
  );
};

export default TodoEdit;
