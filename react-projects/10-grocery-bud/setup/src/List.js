import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, inputBtn, deleteBtn }) => {
  return (
    <div className=' grocery-container'>
      {list.map((item) => {
        return (
          <div className=' grocery-item' key={item.id}>
            <p className='title'>{item.title}</p>
            <div>
              <button className='edit-btn' onClick={() => inputBtn(item.id)}>
                <FaEdit />
              </button>
              <button className='delete-btn' onClick={() => deleteBtn(item.id)}>
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
