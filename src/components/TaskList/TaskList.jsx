import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul className="flex flex-col mt-2">

      {
        tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>
              <TaskItem setTasks={setTasks} task={task} />
            </li>
          ))
        ) : (
          <p className='text-center mt-10'>No hay tareas añadidas.</p>
        )
      }
      {/* {
        tasks.map((task) => (
          <li key={task.id}>
            <TaskItem setTasks={setTasks} task={task} />
          </li>
        ))
      } */}
    </ul>
  )
}

export default TaskList
