import { useState } from "react"
import axios from 'axios'

function Create(){
    const[task ,setTask] = useState()

    const handleAdd = async ()=>{
        try {
            const response = await axios.post('http://localhost:3000/add',{task:task})
        } catch (error) {
            console.log(`error : ${error}`)
        }        
    }


    return(
        <div>
            <input type="text" placeholder="Enter Task" onChange={(e)=> setTask(e.target.value)}/>
            <button type='button' onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create