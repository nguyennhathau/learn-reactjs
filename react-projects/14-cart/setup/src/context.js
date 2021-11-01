import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loadding: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems)

  const [state, dispatch] = useReducer(reducer, initialState)

  const increate = (id) => {
    dispatch({ type: 'INCREMENT', payload: id })
  }

  const decrease = (id) => {
    dispatch({ type: 'DECREMENT', payload: id })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_ALL' })
  }

  // const fetchData = async () => {
  //   dispatch({ type: 'LOADING' })
  //   const response = await fetch(url)
  //   const cart = await response.json()
  //   dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  // }
  // const toggleAmount = (id, type) => {
  //   dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  useEffect(() => {
    dispatch({ type: 'Get-Total-Amount' })
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        increate,
        decrease,
        remove,
        clearCart,
        // toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
