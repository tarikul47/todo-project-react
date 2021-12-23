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
              <div id={`flush-collapse${task.id}`} class="accordion-collapse collapse">
                <div style={{backgroundColor: '#FF605C'}} class="accordion-body tasks">
                  {task.name} <br />
                  {task.status} <br />
                  {task.name}<br />
                </div>
              </div>
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
