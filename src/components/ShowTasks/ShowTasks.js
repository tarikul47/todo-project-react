import React from "react";
import Accordion from "../Accordion/Accordion";
import Button from "../Button/Button";
import SingleTask from "../SingleTask/SingleTask";

const ShowTasks = ({ tasks }) => {
  return (
    <>
    <div className="uppertaskarea">
      <div className="taskarea">
        {tasks.length ? (
          <>
            {tasks.map((task) => (
              <>
              <div key={task.id} className="tasks">
                <p>{task.name}</p>
                {/* <input className="taskInput" type="text" value={task.name} onChange={inputData}/> */}
                <div className="task-update-delete">
                  <Accordion id={task.id} class={'update view'} icon={'fas fa-eye'}></Accordion>
                  <Button class={'update'} icon={'fas fa-pen-square'}></Button>
                  <Button class={'delete'} icon={'fas fa-times-circle'}></Button>
                </div>
              </div>
              <SingleTask task={task}></SingleTask>
              </>
            ))}
          </>
        ) : (
          "Opps!!! There is no Task."
        )}
      </div>
    </div>
    </>
  );
};

export default ShowTasks;
