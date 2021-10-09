import React from 'react'

const Star = ({ selected = false }) => {
  return (
    <>
      <i
        style={{ color: selected ? 'red' : '' }}
        className='material-icons star'
      >
        star
      </i>
    </>
  )
}

export default Star
