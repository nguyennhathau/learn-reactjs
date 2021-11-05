import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
import ReactPaginate from 'react-paginate'

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  let itemsPerPage = 4

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  if (loading) {
    return <h3>loading...</h3>
  }
  return (
    <>
      <div className='section-title '>
        <h2>Pagination</h2>
        <p className='underline'></p>
      </div>

      <div className='followers'>
        <div className='container'>
          {currentItems.map((follower, index) => {
            return <Follower key={index} {...follower} />
          })}
        </div>
      </div>
      <ReactPaginate
        className='btn-container'
        breakLabel='...'
        nextLabel='next'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='previous'
        renderOnZeroPageCount={null}
        pageClassName='page-btn'
        activeClassName='active-btn'
        previousClassName='prev-btn'
        nextClassName='next-btn'
      />
    </>
  )
}

export default App
