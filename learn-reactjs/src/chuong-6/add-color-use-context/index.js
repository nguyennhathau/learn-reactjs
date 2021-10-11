import React, { useState, useContext } from 'react'
import data from './color-data.json'
import { ColorList } from './colorList'
import ColorForm from './ref'
// import ColorsContext from '../../MyContext'

const ColorContext = React.createContext()
export const useColors = () => useContext(ColorContext)

export function AddColorUseContext() {
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
    <ColorContext.Provider value={{ colors, handleDelete, onRateColor }}>
      <div>
        <h1>hello</h1>
        <ColorForm
          onNewColor={(title, color) => {
            var id = (Math.random() + 1).toString(36).substring(7)
            console.log(id)
            const newColors = [{ id, title, color, rating: 0 }, ...colors]
            setColors(newColors)
          }}
        />
        <hr />
        <ColorList
        // colors={colors}
        // handleDelete={handleDelete}
        // onRateColor={onRateColor}
        />
      </div>
    </ColorContext.Provider>
  )
}
