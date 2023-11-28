import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskForm from "./components/TaskForm/TaskForm";
import TaskInfo from "./components/TaskInfo/TaskInfo";
import TaskList from "./components/TaskList/TaskList";
import CompletedTasks from './components/CompletedTasks/CompletedTasks';
import { useState } from "react";
import { useEffect } from "react";


function App() {

  const [tasks, setTasks] = useState([])

  // const addTask = task => {
  //   setTasks([...tasks, {
  //     id: tasks.length,
  //     task: task,
  //     completed: false
  //   }])
  // }

  const taskCompleted = (id) => {

    const storedTasks = JSON.parse(localStorage.getItem('tasks'))

    const element = storedTasks.filter((t) => t.id === id)

    if (storedTasks && storedTasks.length > 0) {
      element.completed = true
    }
    console.log(element)


    localStorage.setItem('tasks', JSON.stringify(storedTasks))
  }

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(tasks)
  }, [])

  return (
    /*{ <div className="flex w-full h-full gap-7 flex-col p-10 shadow-xl rounded text-white bg-[#393F49]">
       <TaskInfo />
       <TaskForm />
       <TaskList />
     </div>
   }*/
    <Router>
      <div className="flex w-full h-full gap-7 flex-col p-10 shadow-xl rounded text-white bg-[#393F49]">
        <Routes>
          <Route path="/completed" element={<CompletedTasks />} />
          <Route
            path="/"
            element={
              <div className="flex w-full h-full gap-7 flex-col">
                <TaskInfo tasksLength={tasks.length} />
                <TaskForm setTask={setTasks} />
                <TaskList tasks={tasks} taskCompleted={taskCompleted} setTasks={setTasks} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App
