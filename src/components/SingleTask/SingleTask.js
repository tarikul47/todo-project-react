import React from "react";
import Accordion from '../Accordion/Accordion'
import Button from '../Button/Button'


const SingleTask = (props) => {
  return (
    <>
    <div className="tasks">
      <p>{props.task.name}</p>
        {/* <input className="taskInput" type="text" value={task.name} onChange={inputData}/> */}
      <div className="task-update-delete">
        <Accordion id={props.task.id} classAttr={'update view'} icon={'fas fa-eye'}></Accordion>
        <Button classAttr ={'update'} icon={'fas fa-pen-square'}></Button>
        <Button id={props.task.id} deleteTask={props.deleteTask} classAttr ={'delete'} icon={'fas fa-times-circle'}></Button>
      </div>
    </div>
    <div id={`flush-collapse${props.task.id}`} className="accordion-collapse collapse">
      <div style={{ backgroundColor: "#222" }} className="accordion-body tasks">
        {props.task.name} <br />
        {props.task.status} <br />
        {props.task.name}
        <br />
      </div>
    </div>
    </>
  );
};

export default SingleTask;
