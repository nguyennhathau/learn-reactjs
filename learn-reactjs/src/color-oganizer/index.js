import React from 'react'
import data from './color-data.json'
import { ColorList } from './colorList'

export function ColorOganizer() {
  return (
    <div>
      <ColorList colors={data} />
    </div>
  )
}
