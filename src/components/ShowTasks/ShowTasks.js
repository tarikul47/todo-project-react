import React from "react";
import Accordion from "../Accordion/Accordion";
import Button from "../Button/Button";
import SingleTask from "../SingleTask/SingleTask";

const ShowTasks = ({ tasks, deletetask }) => {
  return (
    <>
      {tasks.length ? (
        <>
          {tasks.map((task) => <SingleTask key={task.id} task={task}></SingleTask>)}
        </>
      ) : (
        "Opps!!! There is no Task."
      )}
    </>
  );
};

export default ShowTasks;
