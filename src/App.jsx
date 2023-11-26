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
    /*  <div className="flex w-full h-full gap-6 flex-col p-10 shadow-xl rounded text-white bg-[#393F49]">
 
       <div className="flex justify-between">
         <div className="flex flex-col">
           <h3>Saturday, June 1</h3>
           <p className="text-[#61DBFB]">3 Active Tasks</p>
         </div>
         <div className="flex gap-10">
           <button>Incomplete Tasks</button>
           <button>Complited Tasks</button>
         </div>
       </div>
 
       <form className="flex flex-row gap-2">
         <input className="py-1 px-2 rounded w-[300px]"
           type="search" name="" id="" placeholder="Enter a task..." />
         <button className="bg-[#61DBFB] py-1 px-4 rounded">Add Task</button>
       </form>
 
       <div className="flex flex-col">
 
         <div className="flex flex-col">
           <div className="border-t border-gray-500"></div>
           <div className="flex flex-row items-center justify-between">
             <div className="flex items-center gap-5">
               <button>
                 <IoIosCheckmarkCircleOutline className="text-gray-500" size={27} />
               </button>
               <p className="py-4">Client meeting @ 2:30pm</p>
             </div>
             <button className="text-gray-500">
               <FaRegTrashCan size={20} />
             </button>
           </div>
         </div>
 
         <div className="flex flex-col">
           <div className="border-t border-gray-500"></div>
           <div className="flex flex-row items-center justify-between">
             <div className="flex items-center gap-5">
               <button>
                 <IoIosCheckmarkCircleOutline className="text-gray-500" size={27} />
               </button>
               <p className="py-4">Client meeting @ 2:30pm</p>
             </div>
             <button className="text-gray-500">
               <FaRegTrashCan size={20} />
             </button>
           </div>
         </div>
 
         <div className="flex flex-col">
           <div className="border-t border-gray-500"></div>
           <div className="flex flex-row items-center justify-between">
             <div className="flex items-center gap-5">
               <button>
                 <IoIosCheckmarkCircleOutline className="text-gray-500" size={27} />
               </button>
               <p className="py-4">Client meeting @ 2:30pm</p>
             </div>
             <button className="text-gray-500">
               <FaRegTrashCan size={20} />
             </button>
           </div>
         </div>
 
       </div>
 
     </div> */
  )
}

export default App
