import React from 'react'

const TaskInfo = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col">
                <h3>Saturday, June 1</h3>
                <p className="text-[#61DBFB]">3 Active Tasks</p>
            </div>
            <div className="flex items-start gap-10">
                <button>Incomplete Tasks</button>
                <button>Complited Tasks</button>
            </div>
        </div>
    )
}

export default TaskInfo
