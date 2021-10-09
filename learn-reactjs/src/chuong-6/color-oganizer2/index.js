import React, { useState } from 'react'
import data from './color-data.json'
import { ColorList } from './colorList'

export function ColorOganizerTwo() {
  const [colors, setColors] = useState(data)
  // cconst[(select, setSelect)] = useState(data.rating)

  const handleDelete = (id) => {
    const newColors = colors.filter((color) => color.id !== id)
    setColors(newColors)
  }

  const onRateColor = (id, rating) => {
    // console.log(id)
    // console.log(rating)
    const newColors = colors.map(
      (color) => (color.id === id ? { ...color, rating: rating } : color)
      // {
      //   if (color.id === id) {
      //     return { ...color, rating: rating }
      //   } else {
      //     return color
      //   }
      // }
    )
    setColors(newColors)
  }

  return (
    <div>
      <ColorList
        colors={colors}
        handleDelete={handleDelete}
        onRateColor={onRateColor}
      />
    </div>
  )
}
