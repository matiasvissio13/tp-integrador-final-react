import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = () => {
    return (
        <div className="flex flex-col mt-2">
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </div>
    )
}

export default TaskList
