import './TaskForm.css'
import { useEffect, useState } from 'react'
import { TaskService } from '../../../../services/task.service'

const Task = {
    id: null,
    title: '',
    description: '',
    completed: false
}


export default function TaskForm({setTasks}){

    const [data, setData] = useState(Task)

    function handleAddTask(e){
        e.preventDefault()
        handleSubmit()
        setData(Task)
    }

    function handleSubmit(){
        const fetchTasks = async() => {
            const response = await TaskService.submitTask(data)
            setTasks(prev => [...prev, response])
        }
        fetchTasks()
    }

    return(
        <div id="form-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="form-wrapper">
                    <input className="form-control"
                           id='title' 
                           type="text"  
                           placeholder="Title"
                           onChange={e => setData(prev => ({...prev, title:e.target.value}))}
                           value={data.title}/>
                    <input className="form-control" 
                           id='description' 
                           type="text"  
                           placeholder="Description"
                           onChange={e => setData(prev => ({...prev, description:e.target.value}))}
                           value={data.description}/>
                    <input onClick={e => handleAddTask(e)} className="btn btn-warning" id='btn-submit' type="submit" name='Add' />
                </div>
            </form>
        </div>
    )
 }