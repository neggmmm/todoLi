import React, { useState } from 'react'

export default function TodoInput(props) {
    const {handleAdd , todoValue, setTodoValue} = props
  return (
 <header>
    <input 
    value={todoValue}
    onChange={(e)=>{
        setTodoValue(e.target.value)
    }}
    placeholder='Enter Task...' />
    <button onClick={()=>{
        handleAdd(todoValue)
        setTodoValue('')
    }}>Add</button>
 </header>
  )
}
