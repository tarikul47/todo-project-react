import { useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask/CreateTask";
import ShowTasks from "./components/ShowTasks/ShowTasks";

function App() {
  const tasks = [
    { id: 1, name: "Task 1", status: "incomplete" },
    { id: 2, name: "Task 2", status: "incomplete" },
    { id: 3, name: "Task 3", status: "incomplete" },
    { id: 4, name: "Task 4", status: "incomplete" },
    { id: 5, name: "Task 5", status: "incomplete" },
  ];
  console.log(tasks);
  const [task, setTask] = useState("");
  const inputOnChange = (e) => {
    setTask(e.target.value);
  };
  const addTaskHandle = () => {
    const task = {
      id: 6,
      name: document.querySelector("#task").value,
      status: "incomplete",
    };
    tasks.push(task);
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
                    <h2>Hello, Guest !!!</h2>
                  </div>
                  <p>
                    All <span style={{ color: "#FFBD44" }}>Task</span> List :(
                  </p>
                  <ShowTasks tasks={tasks}></ShowTasks>
                  <CreateTask
                    inputOnChange={inputOnChange}
                    task={task}
                    addTaskHandle={addTaskHandle}
                  ></CreateTask>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
