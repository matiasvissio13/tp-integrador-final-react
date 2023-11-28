import React from 'react'

const TaskForm = ({ setTask }) => {

  //const [value, setValue] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //
  //   addTask(value)
  //
  //   setValue('')
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const taskText = formData.get('tasks')
    console.log(taskText)
    if (taskText === '') return

    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false
    }

    setTask((prev) => [...prev, newTask])

    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-2">
      <input
        className="py-[6px] px-2 rounded w-[350px] text-black"
        type="search" name="tasks" id="" placeholder="Enter a task..." />
      <button type='submit' className="bg-[#61DBFB] hover:bg-[#61dcfbe0] transition-all duration-300 px-4 rounded">Add Task</button>
    </form>
  )
}

export default TaskForm


