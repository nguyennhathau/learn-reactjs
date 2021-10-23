import React, { useState, useEffect } from 'react'

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [tongle, setTongle] = useState(true)
  const [text, setText] = useState(info.substring(0, 200) + '...')
  const [showbtn, setShowbtn] = useState('Read more')

  function tongleHandle() {
    if (tongle === true) {
      setShowbtn('Show Less')
      setText(info)
      setTongle(!tongle)
    } else {
      setShowbtn('Read more')
      setText(info.substring(0, 200) + '...')
      setTongle(!tongle)
    }
  }

  console.log(name)
  return (
    <>
      <div className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4 className='title'>{name}</h4>
            <p className='tour-price'>{price}</p>
          </div>
          <span id='infor'>{text}</span>
          <button onClick={() => tongleHandle(tongle)} id='more'>
            {showbtn}
          </button>

          <button className='delete-btn' onClick={() => removeTour(id)}>
            Not interested
          </button>
        </footer>
      </div>
    </>
  )
}

export default Tour
