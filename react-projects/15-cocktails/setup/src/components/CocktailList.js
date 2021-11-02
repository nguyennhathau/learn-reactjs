import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails } = useGlobalContext()
  return (
    <section className='section'>
      <h1 className='section-title'>Cocktails</h1>

      <ul className='cocktails-center'>
        {/* Cocktail */}
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.idDrink} {...cocktail} />
        })}
      </ul>
    </section>
  )
}

export default CocktailList
