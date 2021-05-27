import React from 'react'

export default function Todo({ text, completed }){

  return(
    <div>
      <p>{text}</p>
      <input type="checkbox" id={text} name={text} />
    </div>
  )
}
