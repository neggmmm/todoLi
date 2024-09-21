import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteButton,index , handleEditButton} = props
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={()=>{
                handleEditButton(index)
            }}>
        <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{
            handleDeleteButton(index)
        }}>
        <i className="fa-solid fa-trash"></i>
        </button>
        </div>
    </li>
  )
}
