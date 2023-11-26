import "./App.css"

import TaskForm from "./components/TaskForm/TaskForm";
import TaskInfo from "./components/TaskInfo/TaskInfo";
import TaskList from "./components/TaskList/TaskList";



function App() {

  return (
    <div className="flex w-full h-full gap-7 flex-col p-10 shadow-xl rounded text-white bg-[#393F49]">
      <TaskInfo />
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
