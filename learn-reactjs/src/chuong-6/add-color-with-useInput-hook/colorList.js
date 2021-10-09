import React from 'react'
import Color from './color'

export function ColorList({ colors = [], handleDelete, onRateColor }) {
  if (!colors.length) return <div>No data</div>

  return (
    <div>
      {colors.map((color, i) => (
        <Color
          key={color.id}
          {...color}
          handleDelete={handleDelete}
          onRate={onRateColor}
        />
      ))}
    </div>
  )
}
