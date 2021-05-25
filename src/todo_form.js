import React, { useState } from 'react'

export default function TodoForm({ addTodo }){

  const [newTodo, setNewTodo] = useState("")

  return(
    <div>
      <label for="todo">Todo</label>
      <input type="text"
             name="todo"
             value={newTodo}
             onChange={e => setNewTodo(e.target.value)} />
           <button onClick={() => addTodo(newTodo)}>Add Todo</button>
    </div>
  )
}
