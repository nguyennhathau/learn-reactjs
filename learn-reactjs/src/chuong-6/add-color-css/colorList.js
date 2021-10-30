import React from 'react'
import Color from './color'
import { css } from '@emotion/react'
import { useColors } from '../add-color-css/index'

export function ColorList() {
  const { colors } = useColors()
  console.log(colors)
  if (!colors.length) return <div>No data</div>

  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {colors.map((color, i) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  )
}
