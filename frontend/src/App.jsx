import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import {Todos} from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3000/todos")
  .then(res => {
    res.json()
    .then(res => setTodos(res.todos))
  })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
