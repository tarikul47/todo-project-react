import { useState } from "react";
import shortid from "shortid";
import "./App.css";
import CreateTask from "./components/CreateTask/CreateTask";
import ShowTasks from "./components/ShowTasks/ShowTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  /**
   * Craete add task
   * @param {string} text
   */
  const addNewTask = (text) => {
    const task = {
      id: shortid.generate(),
      name: text,
      status: "Incomplete",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTasks([task, ...tasks]);
  };
  /**
   * Delete task
   * @param {string} task
   */
  const deleteTask = (taskId) => {
    console.log("Console from app for delete", taskId);
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  };
  /**
   * Edit task 
   * @param {string} taskId 
   */
  const editTask = (taskId) => {
    console.log("calling for edit task", taskId)
  }
  console.log(tasks);
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
                  <div className="uppertaskarea">
                    <div className="taskarea">
                      <ShowTasks
                        editTask={editTask}
                        deleteTask={deleteTask}
                        tasks={tasks}
                      ></ShowTasks>
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
}

export default App;
