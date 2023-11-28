// eslint-disable-next-line no-unused-vars
import React from 'react';
import TaskInfo from '../TaskInfo/TaskInfo';
import TaskForm from '../TaskForm/TaskForm';

const CompletedTasks= () => {
  return (
    <div className="flex w-full h-full gap-7 flex-col p-10 shadow-xl rounded text-white bg-[#393F49]">
        <TaskInfo  />
        <TaskForm  />
    </div>
  );
};

export default CompletedTasks;
