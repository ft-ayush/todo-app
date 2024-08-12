import { useState } from 'react'

export function CreateTodo(){
    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")
    return(
        <div>
            <input type="text" placeholder="Title" onChange={(e) => {setTitle(e.target.value)}}></input><br /><br />
            <input type="text" placeholder="Description" onChange={(e) => {setDescription(e.target.value)}}></input><br /><br />
            <button onClick={async () => {
                const response = await fetch("http://localhost:3000/todo",{
                    method: "POST",
                    body: JSON.stringify({title, description}),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                await response.json()
                alert("Todo added!")
            }}>Add Todo</button><br /><br /><br />
        </div>
    )
}