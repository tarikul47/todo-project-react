import React from "react";
import SingleTask from "../SingleTask/SingleTask";

const ShowTasks = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks.length ? (
        <>
          {tasks.map((task) => <SingleTask key={task.id} deleteTask={deleteTask} task={task}></SingleTask>)}
        </>
      ) : (
        "Opps!!! There is no Task."
      )}
    </>
  );
};

export default ShowTasks;
