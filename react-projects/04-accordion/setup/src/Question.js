import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [btn, setBtn] = useState(false)

  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setBtn(!btn)}>
          {!btn ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {btn && <p>{info}</p>}
    </div>
  )
}

export default Question
