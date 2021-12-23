import { useState } from "react";
import shortid from "shortid";
import "./App.css";
import CreateTask from "./components/CreateTask/CreateTask";
import ShowTasks from "./components/ShowTasks/ShowTasks";
import SingleTask from "./components/SingleTask/SingleTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const addNewTask = (text) => {
    const task = {
      id: shortid.generate(),
      name: text,
      status: 'Incomplete',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTasks([task,...tasks]);
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
                    <h2>Hello, Guest !!! {tasks.length}</h2>
                  </div>
                  <p>
                    All <span style={{ color: "#FFBD44" }}>Task</span> List :(
                  </p>
                  <CreateTask addNewTask={addNewTask}></CreateTask>
                  <ShowTasks tasks={tasks}></ShowTasks>
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
