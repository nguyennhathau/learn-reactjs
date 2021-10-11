import React from 'react'

const Star = ({ selected = false, onSelect }) => {
  return (
    <>
      <i
        style={{ color: selected ? 'red' : '' }}
        onClick={onSelect}
        className='material-icons star'
      >
        star
      </i>
    </>
  )
}

export default Star
