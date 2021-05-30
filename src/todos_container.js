import React, { useState } from 'react'
import TodoForm from './todo_form'
import TodoCounter from './todo_counter'
import Todo from './todo'

export default function TodosContainer(){
  const [todos, setTodos] = useState([
    {text: "make breakfast", completed: true},
    {text: "shower", completed: true},
    {text: "apply for jobs", completed: true}
  ])



  const addTodo = (todo) => {
    setTodos([...todos, {text: todo, completed: false}])
  }

  //counter wasn't updating because I wasn't using setTodos!!
  //"counter updates but the order flips and it's off by one"
  function handleChange(text){
    //find the todo that matches the text
    let toBeUpdated = todos.find(todo => todo.text === text)
    let i = todos.findIndex(todo => todo.text === text)
    //flip the completed status
    if(toBeUpdated.completed === false){
      toBeUpdated.completed = true
    } else {
      toBeUpdated.completed = false
    }
    //setTodos([...todos.filter(todo => todo !== toBeUpdated), toBeUpdated])
    //slice up to toBeUpdated
    //insert toBeUpdated
    //slice from toBeUpdated til end
    setTodos([...todos.slice(0, i), toBeUpdated, ...todos.slice(i + 1)])
    console.log(todos)
  }

  return(
    <div>
      {todos.map((todo, index) => <Todo text={todo.text}
                                        completed={todo.completed}
                                        key={index}
                                        handleChange={handleChange}/>)}
      <TodoForm addTodo={addTodo} />
      <TodoCounter todos={todos} />
    </div>
  )
}
