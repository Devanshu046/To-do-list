import React from 'react'

function TodoList(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i onClick={e=>{
            props.delteListItem(props.index)
        }} className="fa-solid fa-trash-can icon-delete"></i>
        </span>
    </li>
  )
}

export default TodoList