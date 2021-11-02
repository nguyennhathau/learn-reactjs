import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([])
  const [loading, setLoading] = useState(false)
  const [strInput, setstrInput] = useState('')

  const setInput = (e) => {
    e.preventDefault()
    let cocktail = e.target.value
    setstrInput(cocktail)
  }

  // const searchCocktail = () => {
  //   setLoading(true)

  //   if (strInput === '') {
  //     loadCocktails()
  //   }
  //   let tempCocktails = cocktails.filter((cock) => {
  //     //regex dùng ở đây sẽ bị lỗi biên dịch ra ASCII 08
  //     // let regex = new RegExp('.*' + strInput + '.*', 'gi')

  //     const termLowerCase = strInput.toLowerCase()

  //     return cock.strDrink.toLowerCase().indexOf(termLowerCase) !== -1
  //   })
  //   console.log(tempCocktails)
  //   setCocktails(tempCocktails)
  // }

  const loadCocktails = useCallback(async () => {
    setLoading(true)
    try {
      let response = await fetch(`${url}${strInput}`)
      // let response = await fetch(`${url}`)
      let data = await response.json()
      if (data.drinks) {
        setCocktails(data.drinks)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (err) {
      // alert(err)
      setLoading(false)
    }
  }, [strInput])

  // const loadCocktails = async () => {
  //   setLoading(true)
  //   try {
  //     // let response = await fetch(`${url}${strInput}`)
  //     let response = await fetch(`${url}`)
  //     let data = await response.json()
  //     if (data.drinks) {
  //       setCocktails(data.drinks)
  //     } else {
  //       setCocktails([])
  //     }
  //     setLoading(false)
  //   } catch (err) {
  //     // alert(err)
  //     setLoading(false)
  //   }
  // }

  useEffect(() => {
    loadCocktails()
  }, [strInput])
  return (
    <AppContext.Provider value={{ cocktails, loading, strInput, setInput }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
