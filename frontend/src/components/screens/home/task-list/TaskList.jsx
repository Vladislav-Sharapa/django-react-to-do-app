import { TaskService } from '../../../../services/task.service'
import './TaskList.css'

export default function TaskList({tasks = [], setTasks}){

    const handleUpdate = async(id, value) =>{
        const response = await TaskService.submitUpdateTask(id, value)
        const newTodos = tasks.map(t =>{

            if(t.id === id){
                return response
            }
            return t;
        })
        setTasks(newTodos)
    }


    return(
        <div className="list-wrapper">
            <div className="flex-wrapper header">
                <div style={{flex:2}}>
                    <span>Title</span>
                </div>
                             
                <div style={{flex:5}}>
                    <span>Description</span>
                 </div>
            </div>
            {tasks.map(function(task, index){
                return(
                        <div onClick={() => {
                            handleUpdate(task.id, {
                                title: task.title,
                                completed: !task.completed
                            })
                        }} key={index} className="task-wrapper flex-wrapper">
                            {task.completed == false ?(
                                <>
                                    <div style={{flex:2}}>
                                        <span>{task.title}</span>
                                    </div>

                                    <div style={{flex:3.8}}>
                                        <span>{task.description}</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                <div style={{flex:2}}>
                                    <strike>{task.title}</strike>
                                </div>

                                <div style={{flex:3.8}}>
                                    <strike>{task.description}</strike>
                                </div>
                            </>  
                            )}
                            <div style={{flex:0}}>
                                <button className="btn  btn-outline-secondary ">Edit</button>
                            </div>
                            <div style={{flex:0}}>
                                <button className="btn btn-outline-danger">Del</button>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}