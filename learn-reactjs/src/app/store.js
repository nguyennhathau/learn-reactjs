import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
// import addColorReducer from '../add-color-with-redux/addColorSlice'
import data from '../color-data.json'

// export default configureStore({
//   reducer: {
//     colors: addColorReducer,
//   },
// })

const addColorReducer = (state = data, action) => {
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

const store = createStore(addColorReducer)
export default store
