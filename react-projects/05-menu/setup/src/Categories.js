import React from 'react'

const Categories = ({ category, clickMenu }) => {
  return (
    <>
      <button className='filter-btn' onClick={() => clickMenu(category)}>
        {category}
      </button>
    </>
  )
}

export default Categories
