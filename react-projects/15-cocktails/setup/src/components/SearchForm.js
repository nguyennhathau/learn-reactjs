import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { strInput, setInput } = useGlobalContext()
  return (
    <section className='section search'>
      <div className='search-form'>
        <form action='' className='form-control'>
          <label>Search Your Favorite Cocktail</label>
          <input
            type='text'
            className='search'
            value={strInput}
            onChange={setInput}
          />
        </form>
      </div>
    </section>
  )
}

export default SearchForm
