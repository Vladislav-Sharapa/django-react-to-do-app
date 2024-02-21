import React, { useState, useEffect } from "react"
import { TaskService } from "../../../services/task.service"
import TaskForm from "./task-form/TaskForm"
import TaskList from "./task-list/TaskList"
import './Home.css'

export default function Home(){

    const [tasks, setTasks] = useState([])
    const [state, setState] = useState(false)

    useEffect(() =>{
        const fetchData = async() => {
            console.log('Fetching...')
            const responce = await TaskService.getAll()
            
            setTasks(responce)
        }

        fetchData()
    }, [])

    return(
        <div className="container">
            <div id="task-container">
                <TaskForm setTasks={setTasks} state={state}/>
                <TaskList tasks={tasks} setTasks={setTasks}/>
            </div>
        </div>
    )
}