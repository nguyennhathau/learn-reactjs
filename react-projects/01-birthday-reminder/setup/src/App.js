import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [items, setData] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{items.length} birthdays today</h3>
        <List items={items} />
        <button onClick={() => setData([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App
