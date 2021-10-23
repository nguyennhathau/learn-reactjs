import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  let btns = []
  const [listItems, setListItems] = useState(items)

  for (let index = 0; index < items.length; index++) {
    if (!btns.includes(items[index].category)) {
      btns.push(items[index].category)
    }
  }

  const clickMenu = (cat) => {
    let newList = items.filter((item) => item.category === cat)
    setListItems(newList)
  }

  return (
    <main className='section menu'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      {/* categories */}
      <div className='btn-container'>
        <button className='filter-btn' onClick={() => setListItems(items)}>
          All
        </button>
        {btns.map((category, i) => {
          return (
            <Categories key={i} category={category} clickMenu={clickMenu} />
          )
        })}
      </div>

      {/* //menu */}
      <div className='section-center'>
        {listItems.map((item, i) => {
          return <Menu key={item.id} {...item} />
        })}
      </div>
    </main>
  )
}

export default App
