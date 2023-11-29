// eslint-disable-next-line no-unused-vars
import React from 'react';
import TasksListCompleted from '../TasksListCompleted/TasksListCompleted';

const CompletedTasks = ({tasks, setTasks}) => {
  return (
    <>
    <TasksListCompleted tasks={tasks} setTasks={setTasks}/>
    </>
  );
};

export default CompletedTasks;
