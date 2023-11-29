import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TasksListCompleted = ({ tasks, setTasks }) => {
  return (
    <ul className="flex flex-col mt-2 pr-4 overflow-y-auto custom-scroll">
      {
        tasks.length > 0 ? (
          tasks
          .filter((task) => task.completed)
          .map((task) => (
            <li key={task.id}>
              <TaskItem setTasks={setTasks} task={task} />
            </li>
          ))
        ) : (
          <p className='text-center mt-10'>No hay tareas añadidas.</p>
        )
      }
    </ul>
  )
}

export default TasksListCompleted