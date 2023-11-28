import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";

const TaskItem = ({ task, setTasks, taskCompleted }) => {

  const handleDelete = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const newTasks = tasks.filter((t) => t.id !== task.id)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  return (
    <div className="flex flex-col">
      <div className="border-t border-gray-500"></div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-5">
          <button onClick={() => taskCompleted(task.id)}
            className="text-gray-500 hover:text-green-500 transition-all duration-300">
            <IoIosCheckmarkCircleOutline size={27} />
          </button>
          <p className="py-4">{task.text}</p>
        </div>
        <button onClick={handleDelete}
          className="text-gray-500 hover:text-red-500 transition-all duration-300">
          <FaRegTrashCan size={20} />
        </button>
      </div>
    </div>

  )
}

export default TaskItem
