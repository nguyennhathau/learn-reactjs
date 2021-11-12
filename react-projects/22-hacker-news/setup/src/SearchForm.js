import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()

  return (
    <form action='' className='search-form'>
      <h2>Search</h2>
      <input
        type='text'
        value={query}
        onChange={(e) => handleSearch(e)}
        className='form-input'
      />
    </form>
  )
}

export default SearchForm
