import React, { useState } from "react";
import shortid from "shortid";
import TodoCreate from "../TodoCreate/TodoCreate";
import TodoEdit from "../TodoEdit/TodoEdit";
import TodoEmpty from "../TodoEmpty/TodoEmpty";

const TodoList = () => {
  const [todoEditing, setTodoEditing] = useState(null);

  const [todos, setTodos] = useState([
    {
      id: shortid.generate(),
      name: "title 1",
      status: "Complete",
      createdAt: new Date(),
    },
    {
      id: shortid.generate(),
      name: "title 2",
      status: "Incomplete",
      createdAt: new Date(),
    },
    {
      id: shortid.generate(),
      name: "title 3",
      status: "Incomplete",
      createdAt: new Date(),
    },
  ]);

  const addTodo = (todo) => {
    let newTodos = todos.slice();
    newTodos.unshift(todo);
    setTodos(newTodos);
  };
  const deleteTodo = (index) => {
    let newTodos = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const updateTodo = ({ index, todo }) => {
    let newTodos = todos.slice();
    newTodos[index] = todo;
    setTodos(newTodos);
    setTodoEditing(null);
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            {/*  Task Area*/}
            <div className="sider mt-5">
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
              <div className="row">
                <div className="col-lg-9 mx-auto text-white">
                  <div className="my-name">
                    <h2>Hello, Guest !!! {todos.length}</h2>
                  </div>
                  <p>
                    All <span style={{ color: "#FFBD44" }}>Task</span> List :(
                  </p>
                  <TodoCreate
                    onCreateTodo={(todo) => addTodo(todo)}
                  ></TodoCreate>
                  <div className="uppertaskarea">
                    <div className="taskarea">
                      {todos.length === 0 && <TodoEmpty />}

                      {todos.map((todo, index) => (
                        <div
                          key={index}
                          className={`tasks todo-${
                            todo.status === "Complete" && "complete"
                          }`}
                        >
                          <p>
                            {todoEditing === index ? (
                              <TodoEdit
                                todo={todo}
                                index={index}
                                onUpdateTodo={(value) => updateTodo(value)}
                              />
                            ) : (
                              <>
                                {todo.status === "Incomplete" && todo.name}
                                {todo.status === "Complete" && (
                                  <del>{todo.name}</del>
                                )}
                              </>
                            )}
                          </p>
                          <div className="task-update-delete">
                            {todoEditing === index ? (
                              <>
                                <div id="taskUpdate" className="cross">
                                  <span onClick={() => setTodoEditing(null)}>
                                    <i class="fas fa-times-circle"></i>
                                  </span>
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                            <div id="taskUpdate" className="update">
                              <span onClick={() => setTodoEditing(index)}>
                                <i className="fas fa-pen-square"></i>
                              </span>
                            </div>
                            <div className="delete">
                              <span onClick={() => deleteTodo(index)}>
                                <i className="fas fa-trash-alt"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
