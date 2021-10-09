import React from 'react'
import Color from './color'

export function ColorList({ colors = [] }) {
  if (!colors.length) return <div>No data</div>

  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  )
}
