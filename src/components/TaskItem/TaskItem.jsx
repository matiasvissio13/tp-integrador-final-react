import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";

const TaskItem = ({ task, setTasks }) => {

  const handleDelete = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const newTasks = tasks.filter((t) => t.id !== task.id)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const taskCompleted = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        t.completed = !t.completed
      }
      return t
    })
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  return (
    <div className="flex flex-col">
      <div className="border-t border-gray-500"></div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-5">
          <button onClick={taskCompleted} className={`hover:text-green-500 transition-all duration-300 ${task.completed ? 'text-green-500' : 'text-gray-500'}`}>
            <IoIosCheckmarkCircleOutline size={27} />
          </button>
          <p className={`py-4 ${task.completed && 'line-through text-gray-400'}`}>{task.text}</p>
        </div>
        <button onClick={handleDelete}
          className="text-gray-500 hover:text-red-500 transition-all duration-300">
          <FaRegTrashCan size={20} />
        </button>
      </div>
    </div >
  )
}

export default TaskItem
