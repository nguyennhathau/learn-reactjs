import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [data, setData] = useState([])
  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState(true)
  const loadData = async () => {
    // alert('1: ' + loading)
    try {
      const resp = await fetch(url)
      const json = await resp.json()
      setData(json)
      setLoading(false)
      // alert('2: ' + loading)
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }
  useEffect(() => {
    loadData()
  }, [])

  // alert('3: ' + loading)
  if (loading) {
    return <h3 className='loading'>...loading</h3>
  }

  const { company, dates, duties, title } = data[value]
  return (
    <section className='section'>
      <div className='title'>
        <h2>Experiment</h2>
        <div className='underline'></div>
      </div>

      {/* buttons */}
      <div className='job-center'>
        <div className='btn-container'>
          {data.map((job, i) => (
            <button
              className='job-btn'
              key={i}
              onClick={() => {
                setValue(i)
              }}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* // info */}
        <div className='job-info'>
          {console.log(data)}
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='date'>{dates}</p>
          {duties.map((duty, i) => {
            return (
              <div key={i} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default App
