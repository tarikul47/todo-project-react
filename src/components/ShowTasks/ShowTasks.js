import React from "react";
import SingleTask from "../SingleTask/SingleTask";

const ShowTasks = ({ tasks, deleteTask,editTask }) => {
  return (
    <>
      {tasks.length ? (
        <>
          {tasks.map((task) => <SingleTask key={task.id} editTask={editTask} deleteTask={deleteTask} task={task}></SingleTask>)}
        </>
      ) : (
        "Opps!!! There is no Task."
      )}
    </>
  );
};

export default ShowTasks;
