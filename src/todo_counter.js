import React from 'react'

export default function TodoCounter({ todos }){

    function reducer(acc, cv){
      if(cv.completed === false){
        return acc + 1
      } else {
        return acc
      }
    }

    return(
      <div>
        {todos.reduce(reducer, 0)}
      </div>
    )
}
