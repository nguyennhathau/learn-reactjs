import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

// https://unsplash.com/oauth/applications/273666
//access-key: iul74V_YQp_b7LRGomJeI68MYrA-7NzrKZx136eow5s
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [photos, setPhotos] = useState([])

  const fetchData = async () => {
    setLoading(true)
    let url
    const pageUrl = `&page=${page}`
    const queryUrl = `&query=${query}`
    if (query) {
      url = `${searchUrl}${clientID}${pageUrl}${queryUrl}`
    } else {
      url = `${mainUrl}${clientID}${pageUrl}`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results
        } else if (query) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      })
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [page])

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1
        })
      }
    })
    return () => window.removeEventListener('scroll', event)
  }, [])

  const handleSubmit = (e) => {
    e.preventDedault()
    setPage(1)
    fetchData()
  }

  return (
    <main>
      <section className='search'>
        <form onSubmit={handleSubmit} className='search-form'>
          <input
            type='text'
            className='form-input'
            placeholder='Search'
            value={query}
            onChange={(e) => e.target.value}
          />
          <button type='submit' className='submit-btn'>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />
          })}
        </div>
        {loading && <h2 className='loading'>Loading....</h2>}
      </section>
    </main>
  )
}

export default App
