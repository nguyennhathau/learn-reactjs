import React from 'react'

const List = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li className='person'>
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.age} years</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
