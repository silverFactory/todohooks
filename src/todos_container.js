import React, { useState } from 'react'
import TodoForm from './todo_form'
import Todo from './todo'

export default function TodosContainer(){
  const [todos, setTodos] = useState([
    {text: "make breakfast", completed: false},
    {text: "shower", completed: false},
    {text: "apply for jobs", completed: false}
  ])

  const addTodo = (todo) => {
    setTodos([...todos, {text: todo, completed: false}])
  }

  return(
    <div>
      {todos.map((todo, index) => <Todo text={todo.text}
                                        completed={todo.completed}
                                        key={index}/>)}
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}
