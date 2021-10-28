import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, inputBtn, deleteBtn }) => {
  return (
    <div className=' grocery-container'>
      {list.map((bug, i) => {
        return (
          <div className=' grocery-item' key={i}>
            <p className='title'>{bug}</p>
            <div>
              <button className='edit-btn' onClick={() => inputBtn(bug)}>
                <FaEdit />
              </button>
              <button className='delete-btn' onClick={() => deleteBtn(bug)}>
                <FaTrash />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
