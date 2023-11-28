import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskForm from "./components/TaskForm/TaskForm";
import TaskInfo from "./components/TaskInfo/TaskInfo";
import TaskList from "./components/TaskList/TaskList";
import CompletedTasks from './components/CompletedTasks/CompletedTasks';


function App() {

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
                <TaskInfo />
                <TaskForm />
                <TaskList />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App
