import { useState } from "react"

export function Todos({todos}){
    return(
        <div>
            {todos.map(todo =>
                <div>
                    <b>{todo.title}</b><br />
                    {todo.description}<br />
                    <Button completed={todo.completed} id={todo._id} />
                </div>
            )}
        </div>
    )
}

function Button({completed, id}){
    const [todoCompleted, setTodoCompleted] = useState(completed)

    return <button onClick={async () => {
        const response = await fetch("http://localhost:3000/completed",{
            method: "PUT",
            body: JSON.stringify({id}),
            headers: {
                "Content-type": "application/json"
            }
        })
        await response.json()
        setTodoCompleted(true)
    }}>
        {todoCompleted? "Completed" : "Mark as Completed"}
    </button>
}