import React, { useState, useEffect } from 'react'
import TodoForm from './todo_form'
import TodoCounter from './todo_counter'
import Todo from './todo'
import { createClient } from 'pexels';


export default function TodosContainer(){
  const [todos, setTodos] = useState([
    {text: "make breakfast", completed: false},
    {text: "shower", completed: false},
    {text: "apply for jobs", completed: false}
  ])



  const addTodo = (todo) => {
    setTodos([...todos, {text: todo, completed: false}])
  }

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
    setTodos([...todos.slice(0, i), toBeUpdated, ...todos.slice(i + 1)])
  }

  const [pics, setPics] = useState([])

  const client = createClient('563492ad6f91700001000001c1ec9594521a495e94ece6f5f94d892e');
  const query = 'Nature';
  useEffect(() => {
    client.photos.search({ query, per_page: 1 }).then(photos => {
      console.log(photos)
      setPics([photos.photos[0].src.small])
    });
  })


  return(
    <div>
      {todos.map((todo, index) => <Todo text={todo.text}
                                        completed={todo.completed}
                                        key={index}
                                        handleChange={handleChange}/>)}
      <TodoForm addTodo={addTodo} />
      <TodoCounter todos={todos} />
      <img src={pics[0]} alt="some picture"/>
    </div>
  )
}
