import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { query, error, setQuery } = useGlobalContext()

  return (
    <form onSubmit={(e) => e.preventDefault()} className='search-form'>
      <h2>Search </h2>
      <input
        type='text'
        value={query}
        className='form-input'
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div>{error.msg}</div>}
    </form>
  )
}

export default SearchForm
