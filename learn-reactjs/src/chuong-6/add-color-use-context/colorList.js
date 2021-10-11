import React from 'react'
import Color from './color'
// import ColorsContext from '../../MyContext'
import { useColors } from '../add-color-use-context/index'

export function ColorList() {
  const { colors } = useColors()
  console.log(colors)
  if (!colors.length) return <div>No data</div>

  return (
    <div>
      {colors.map((color, i) => (
        <Color
          key={color.id}
          {...color}
          // handleDelete={handleDelete}
          // onRate={onRateColor}
        />
      ))}
    </div>
  )
}
