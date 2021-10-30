import React from 'react'
import Color from './color'
import { css } from '@emotion/react'
// import { useColors } from '../add-color-css/index'
import { useDispatch } from 'react-redux'
import { addColor } from './addColorSlice'
import store from '../app/store'

export function ColorList() {
  // const { colors } = useColors()
  const colors = store.getState().colors.data
  console.log(colors.length)
  if (!colors.length) return <div>No data</div>

  return (
    <div>
      {colors.map((color, i) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  )
}
