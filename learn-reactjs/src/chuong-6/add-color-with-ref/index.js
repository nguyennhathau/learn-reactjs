import React, { useState } from 'react'
import data from './color-data.json'
import { ColorList } from './colorList'
import ColorForm from './ref'
import MD5 from 'crypto-js/md5'

export function AddColorWithRef() {
  const [colors, setColors] = useState(data)

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
