import React from 'react'

const TaskForm = () => {
    return (
        <form className="flex flex-row gap-2">
            <input className="py-[6px] px-2 rounded w-[350px] text-black"
                type="search" name="" id="" placeholder="Enter a task..." />
            <button className="bg-[#61DBFB] hover:bg-[#61dcfbe0] transition-all duration-300 px-4 rounded">Add Task</button>
        </form>
    )
}

export default TaskForm


