import React from "react";
import Accordion from '../Accordion/Accordion'
import Button from '../Button/Button'


const SingleTask = (props) => {
  console.log(props.task)
  return (
    <>
    <div className="tasks">
      <p>{props.task.name}</p>
      {/* <input className="taskInput" type="text" value={task.name} onChange={inputData}/> */}
      <div className="task-update-delete">
        <Accordion id={props.task.id} classAttr={'update view'} icon={'fas fa-eye'}></Accordion>
        <Button id={props.task.id} editTask={props.editTask} classAttr ={'update'} icon={'fas fa-pen-square'}></Button>
        <Button id={props.task.id} deleteTask={props.deleteTask} classAttr ={'delete'} icon={'fas fa-times-circle'}></Button>
      </div>
    </div>
    <div id={`flush-collapse${props.task.id}`} className="accordion-collapse collapse">
      <div style={{ backgroundColor: "#222" }} className="accordion-body tasks">
      <ol className="list-group list-group-numbered" style={{width: '100%'}}>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Task Name:</div>
          </div>
          <span className="badge bg-primary rounded-pill">{props.task.name}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Task Status:</div>
          </div>
          <span className="badge bg-primary rounded-pill">{props.task.status}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Task Created</div>
          </div>
          <span className="badge bg-primary rounded-pill">{props.task.createdAt.getDate()}/{props.task.createdAt.getMonth()}/{props.task.createdAt.getFullYear()}</span>
        </li>
      </ol>
    
        <br />
      </div>
    </div>
    </>
  );
};

export default SingleTask;
