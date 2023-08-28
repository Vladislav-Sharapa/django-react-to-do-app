export const TaskService = {
    async getAll(){
        const response = await fetch('http://127.0.0.1:8000/api/task/list/')
        const data = await response.json()

        return data
    },

    async submitTask(data){
        const postRequest = {
            method:'post',
            body:JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            }
        }

        const responce = await fetch('http://127.0.0.1:8000/api/task/create/', postRequest)
        if(responce.ok){
            const responceData = await responce.json()
            return responceData
        }
        else{
            const message = `An error has occured: ${responce.message}`;
            throw new Error(message);
        }
    },

    async submitEditTask(data){
        const postRequest = {
            method:'post',
            body:JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            }
        }

        const responce = await fetch(`http://127.0.0.1:8000/api/task/update/${data.id}/`, postRequest)
        if(responce.ok){
            const responceData = await responce.json()
            return responceData
        }
        else{
            const message = `An error has occured: ${responce.message}`;
            throw new Error(message);
        }
    },

    async submitDelete(data){
        const postRequest = {
            method:'post',
            body:JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            }
        }
        const responce = await fetch(`http://127.0.0.1:8000/api/task/create/${data.id}/`, postRequest)
    }
}
