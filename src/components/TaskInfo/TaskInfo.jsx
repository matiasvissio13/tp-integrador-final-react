import React from 'react'
import { Link } from 'react-router-dom';
const TaskInfo = ({tasksLength}) => {
    const fechActual = new Date();
    const diasSemanas = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const diaSemana = diasSemanas[fechActual.getDay()];
    const mes = meses[fechActual.getMonth()];
    const diaMes = fechActual.getDate();
    return (
        <div className="flex justify-between">
            <div className="flex flex-col">
                <h3>{`${diaSemana} , ${mes} ${diaMes}`} </h3>
                <p className="text-[#61DBFB]">{tasksLength} Active Tasks</p>
            </div>
            <div className="flex items-start gap-10">
                <Link to="/"><button>Incomplete Tasks</button></Link>
                <Link to="/completed"><button>Completed Tasks</button></Link>
            </div>
        </div>
    )
}

export default TaskInfo
