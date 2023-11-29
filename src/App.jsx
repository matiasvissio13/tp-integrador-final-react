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

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(tasks)
  }, [])

  return (
    <Router>
      <div className="flex w-full h-full gap-7 flex-col p-10 shadow-xl rounded text-white bg-[#393F49]">
        <div className="flex w-full h-full gap-7 flex-col">
          <TaskInfo tasks={tasks} />
          <TaskForm setTask={setTasks} />
          <Routes>
            <Route
              path="/"
              element={
                <TaskList tasks={tasks} setTasks={setTasks} />
              }
            />
            <Route path="/completed"
              element={<CompletedTasks tasks={tasks} setTasks={setTasks}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
