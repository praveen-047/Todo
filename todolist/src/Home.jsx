import { useState } from "react"
import Create from "./Create"


function Home(){
    const [todos,setTodos] = useState([])
    
    return(
        <div>
            <h1>Todo List</h1>
            <Create/>
            {
                todos.length === 0 ? 
                (<div><h1>No record</h1></div>)
                :
                (todos.map(todo=>(
                    <div>
                        {todo}
                    </div>
                )))
                
            }
        </div>
    )
}

export default Home