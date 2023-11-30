import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const TaskInfo = ({tasks}) => {
    const [toggleNav, setToggleNav] = useState(true)

    const fechActual = new Date();
    const diasSemanas = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const diaSemana = diasSemanas[fechActual.getDay()];
    const mes = meses[fechActual.getMonth()];
    const diaMes = fechActual.getDate();
    return (
        <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col text-center sm:text-left">
                <h3>{`${diaSemana} , ${mes} ${diaMes}`} </h3>
                <p className="text-[#61DBFB]">{tasks.filter((task) => !task.completed).length} Active Tasks</p>
            </div>
            <div className="flex justify-evenly sm:justify-normal pt-5 sm:pt-0 items-start gap-10">
                <Link to="/"><button className={`${!toggleNav && 'text-gray-400'}`} onClick={() => setToggleNav(true)}>Incomplete Tasks</button></Link>
                <Link to="/completed"><button className={`${toggleNav && 'text-gray-400'}`} onClick={() => setToggleNav(false)}>Completed Tasks</button></Link>
            </div>
        </div>
    )
}

export default TaskInfo
