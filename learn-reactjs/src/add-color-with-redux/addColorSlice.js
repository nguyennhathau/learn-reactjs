import { createSlice } from '@reduxjs/toolkit'
import data from '../color-data.json'
import { addColorAction } from '../add-color-with-redux/actions'

const addColorReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD-COLOR':
      console.log('add1')
      let newState = [
        ...state,
        {
          id: action.id,
          title: action.title,
          color: action.color,
          rating: action.rating,
        },
      ]
      return newState
    default:
      return state
  }
}

export const slice = createSlice({
  name: 'addColor',
  initialState: {
    data: data,
  },
  reducers: {
    addColor: addColorReducer,
  },
})

export const { addColor } = slice.actions
// export const selectdata = (state) => state.data.value
export default slice.reducer
