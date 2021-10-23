import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [count, setCount] = useState(0)
  const person = people[count]

  const checkNumber = (number) => {
    if (number > people.length - 1) return 0
    if (number < 0) return people.length - 1
    return number
  }

  const personRandom = () => {
    let random = Math.floor(Math.random() * people.length - 1) + 1
    console.log(random + '   :  ' + count)
    if (random === count) {
      random = count + 1
    }
    setCount(checkNumber(random))
  }

  const preNext = (text) => {
    if (text === 'pre') {
      setCount(checkNumber(count - 1))
    }
    if (text === 'next') {
      setCount(checkNumber(count + 1))
    }
  }

  const uniKeyCode = (e) => {
    console.log(e.keyCode)
    if (e.keyCode === 37) {
      setCount(checkNumber(count - 1))
    }
    if (e.keyCode === 39) {
      setCount(checkNumber(count + 1))
    }
  }

  return (
    <>
      <div className='review'>
        <div className='img-container'>
          <img src={person.image} alt={person.name} className='person-img' />
          <div className='quote-icon'>
            <FaQuoteRight />
          </div>
        </div>
        <h4 className='author'>{person.name}</h4>
        <p className='job'>{person.job}</p>
        <div className='info'>{person.text}</div>
        <div>
          <FaChevronLeft
            className='prev-btn'
            onKeyDown={(e) => uniKeyCode(e)}
            onClick={() => preNext('pre')}
            tabIndex={0}
          />
          <FaChevronRight
            className='next-btn'
            onKeyDown={(e) => uniKeyCode(e)}
            onClick={() => preNext('next')}
          />
        </div>
        <button className='random-btn' onClick={personRandom}>
          surprise me
        </button>
      </div>
    </>
  )
}

export default Review
