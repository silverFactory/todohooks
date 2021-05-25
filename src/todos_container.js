import React, { useState } from 'react'
import TodoForm from './todo_form'

export default function TodosContainer(){
  const [todos, setTodos] = useState([
    {text: "make breakfast", completed: false},
    {text: "shower", completed: false}.
    {text: "apply for jobs", completed: false}
  ])

  return(
    <div>
      {todos.map((todo, index) => <div><p>{todo.text}</p>
    <input type="checkbox" id={index} name={index}></div>)}
      <TodoForm />
    </div>
  )
}
