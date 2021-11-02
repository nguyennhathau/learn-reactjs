import React from 'react'
import Cocktail from '../components/Cocktail'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context'

const Home = () => {
  const { loading } = useGlobalContext()
  return (
    <main>
      {/* search form */}
      <SearchForm />
      {/* Cocktail list */}
      {loading ? <Loading /> : <CocktailList />}
    </main>
  )
}

export default Home
