import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  const preClick = () => {
    if (page === 0) {
      return
    }
    setPage(page - 1)
  }

  const nextClick = () => {
    if (page === data.length - 1) {
      return
    }
    setPage(page + 1)
  }

  const handleClick = (index) => {
    setPage(index)
  }

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  return (
    <main>
      <section className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </section>
      <div className='followers'>
        <div className='container'>
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
      </div>
      {!loading && (
        <div className='btn btn-container'>
          <button onClick={preClick} className='prev-btn'>
            prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                onClick={() => handleClick(index)}
                key={index}
                className={`page-btn ${index === page ? 'active-btn' : null}`}
              >
                {index + 1}
              </button>
            )
          })}
          <button onClick={nextClick} className='prev-btn'>
            next
          </button>
        </div>
      )}
    </main>
  )
}

export default App
