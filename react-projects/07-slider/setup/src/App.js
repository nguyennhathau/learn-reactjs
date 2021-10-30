import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [people, setPeople] = useState(data)
  // const person = data[count]

  useEffect(() => {
    console.log(count)
    let slider = setTimeout(clickNext, 3000)
    return () => {
      clearTimeout(slider)
    }
  }, [count])

  const clickNext = () => {
    if (count >= data.length - 1) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }

  const clickPre = () => {
    if (count <= 0) {
      setCount(data.length - 1)
    } else {
      setCount(count - 1)
    }
  }

  // console.log(data.length)
  // const { image, name, title, quote } = person

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> Review
        </h2>
      </div>

      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === count) {
            position = 'activeSlide'
          }
          if (
            personIndex === count - 1 ||
            (count === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt='' className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <div className='icon'>
                <FaQuoteRight />
              </div>
            </article>
          )
        })}
        <FiChevronLeft className='prev' onClick={clickPre} />
        <FiChevronRight className='next' onClick={clickNext} />
      </div>
    </section>
  )
}

export default App
