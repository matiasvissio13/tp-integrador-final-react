import React from 'react'

const TaskForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const newTask = formData.get('task')
    const tasks = JSON.parse(localStorage.getItem('task')) || []
    localStorage.setItem('task', JSON.stringify([...tasks, newTask]))
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-2">
      <input className="py-[6px] px-2 rounded w-[350px] text-black"
        type="search" name="task" id="" placeholder="Enter a task..." />
      <button className="bg-[#61DBFB] hover:bg-[#61dcfbe0] transition-all duration-300 px-4 rounded">Add Task</button>
    </form>
  )
}

export default TaskForm


