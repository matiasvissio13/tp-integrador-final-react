import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul className="flex flex-col mt-2">
      {
        tasks.map((task) => (
          <li key={task.id}>
            <TaskItem setTasks={setTasks} task={task} />
          </li>
        ))
      }
    </ul>
  )
}

export default TaskList
