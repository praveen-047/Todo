import { useState } from "react"
import Create from "./Create"
import { useEffect } from "react"
import axios from "axios"
import { MdDelete } from "react-icons/md";
import './Home.css'

function Home(){
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        const fetchTodos = async ()=>{
            try {
                const response = await axios.get('http://localhost:3000/get')
                console.log(response.data)
                setTodos(response.data)
            } catch (error) {
                console.log("error fetching todos: ",error)
            }
        }
        fetchTodos();
    },[])

    const handleEdit = async (id)=>{
        await axios.put('http://localhost:3000/update/'+id)
    }
    
    return(
        <div>
            <h1>Todo List</h1>
            <Create/>
            {
                todos.length === 0 ? 
                (<div><h1>No record</h1></div>)
                :
                (todos.map(todo=>(
                    <div key={todo._id} className="task-container">
                        <input type='checkbox' onChange={()=>handleEdit(todo._id)}/>
                        <p>{todo.task}</p>
                        <MdDelete />
                    </div>
                )))
                
            }
        </div>
    )
}

export default Home