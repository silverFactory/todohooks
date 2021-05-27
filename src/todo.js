import React from 'react'

export default function Todo({ text, completed, handleChange }){


  return(
    <div>
      <p>{text}</p>
      <input type="checkbox" id={text} name={text}
        onChange={() => handleChange(text)} />
    </div>
  )
}
