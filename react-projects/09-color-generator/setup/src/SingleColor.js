import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight }) => {
  const [alert, setAlert] = useState(false)

  const coppyClipBoard = () => {
    navigator.clipboard.writeText(rgbToHex(...rgb))
    setAlert(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 3000)
  }, [alert])
  return (
    <div
      className='color'
      style={{ backgroundColor: 'rgb(' + rgb.join(',') + ')' }}
      onClick={coppyClipBoard}
    >
      <p className='percent-value'>{rgbToHex(...rgb)}</p>
      <p className='color-value'>{weight}%</p>
      {alert && <p className='alert'>COPIED TO CLIPBOARD</p>}
    </div>
  )
}

export default SingleColor
