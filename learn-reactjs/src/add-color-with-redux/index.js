import React, { useState, useContext } from 'react'

// import data from './color-data.json'
import { ColorList } from './colorList'
import ColorForm from './ref'
import { useDispatch } from 'react-redux'
import { addColor } from './addColorSlice'
import store from '../app/store'
const ColorContext = React.createContext()
// export const useColors = () => useContext(ColorContext)

export function AddColorUseRedux() {
  // const [colors, setColors] = useState(data)
  const colors = store.getState().colors.data
  console.log('index: ' + JSON.stringify(colors[0]))
  const handleDelete = (id) => {
    // const newColors = colors.filter((color) => color.id !== id)
    // setColors(newColors)
  }

  const onRateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating: rating } : color
    )
    // setColors(newColors)
  }

  return (
    <div>
      <h1>hello</h1>
      <ColorForm
        store={store}
        // onNewColor={(title, color) => {
        //   var id = (Math.random() + 1).toString(36).substring(7)
        //   console.log(id)
        //   const newColors = [{ id, title, color, rating: 0 }, ...colors]
        //   // setColors(newColors)

        // }}
      />
      <hr />
      <ColorList />
    </div>
  )
}
