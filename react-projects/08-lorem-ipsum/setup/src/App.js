import React, { useState } from 'react'
import data from './data'
function App() {
  const [paragraph, setParagraph] = useState([])
  const [number, setNumber] = useState(0)

  const splitPara = (e) => {
    e.preventDefault()
    let textArr = ''

    if (number <= 0 || Number.isNaN(number)) {
      textArr = data.slice(0, 1)
    } else {
      textArr = data.slice(0, number)
    }
    console.log(number)
    console.log(textArr)
    setParagraph(textArr)
  }

  return (
    <section className='section-center'>
      <h3>text</h3>
      <div>
        <form onSubmit={splitPara} className='lorem-form'>
          <label>Paragraphs:</label>
          <input
            name='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type='number'
          />
          <button type='submit' className='btn'>
            GeneRate
          </button>
        </form>
      </div>
      <div className='result'>
        {paragraph.map((text, i) => {
          return <p key={i}>{text}</p>
        })}
      </div>
    </section>
  )
}

export default App
