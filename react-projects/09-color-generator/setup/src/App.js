import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [value, setColor] = useState('')
  // #f15025
  const [list, setList] = useState(new Values('#f15025').all(10))
  const [error, seterror] = useState(false)

  const handleColor = (e) => {
    e.preventDefault()
    if (!/^#[0-9A-F]{6}$/i.test(value)) {
      seterror(true)
    } else {
      setList(new Values(value).all(10))
    }
  }

  return (
    <section>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleColor}>
          <input
            className={!error ? '' : 'error'}
            type='text'
            placeholder='#f15025'
            value={value}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, i) => {
          return <SingleColor {...color} key={i} index={index} />
        })}
      </section>
    </section>
  )
}

export default App
