import React, { useState } from 'react'
import data from './color-data.json'
import { ColorList } from './colorList'
import ColorForm from './ref'
import MD5 from 'crypto-js/md5'
import useInput from './hooks'

export function AddColorWithUseInput() {
  const [colors, setColors] = useState(data)
  const [titleProps, resetTitle] = useInput('')
  const [colorProps, resetColor] = useInput('#000000')

  const handleDelete = (id) => {
    const newColors = colors.filter((color) => color.id !== id)
    setColors(newColors)
  }

  const onRateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating: rating } : color
    )
    setColors(newColors)
  }

  return (
    <div>
      <ColorForm
        titleProps={titleProps}
        resetTitle={resetTitle}
        colorProps={colorProps}
        resetColor={resetColor}
        onNewColor={(title, color) => {
          var id = MD5('Message').toString()
          const newColors = [{ id, title, color, rating: 0 }, ...colors]
          setColors(newColors)
        }}
      />
      <hr />
      <ColorList
        colors={colors}
        handleDelete={handleDelete}
        onRateColor={onRateColor}
      />
    </div>
  )
}
