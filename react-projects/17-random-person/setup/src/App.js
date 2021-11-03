import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setloading] = useState(false)
  const [person, setperson] = useState(null)
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('Random User')

  const loadUser = async () => {
    setloading(true)
    try {
      let response = await fetch(url)
      let data = await response.json()
      // console.log(data.results[0])

      const person = data.results[0]
      let {
        name: { first, last },
        email,
        dob: { age },
        location: {
          street: { number, name },
        },
        login: { password },
        phone,
        picture: { large: image },
      } = person

      let newPerson = {
        image,
        phone,
        email,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`,
      }
      setperson(newPerson)
      setloading(false)
      setTitle('name')
      setValue(newPerson.name)
    } catch (err) {
      console.log(err)
      setloading(false)
    }
  }

  const handleClick = (e) => {
    let list = e.target.classList
    if (list.contains('icon')) {
      let name = e.target.dataset.label
      setTitle(name)
      setValue(person[name])
    }
  }

  // console.log(person)
  useEffect(() => {
    loadUser()
  }, [])
  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block container'>
        <img src={(person && person.image) || defaultImage} alt='' />
        <div>
          <p className='user-title'>this is {title}</p>
          <p className='user-value'>{value}</p>
          <ul className='values-list'>
            <li
              className='icon'
              data-label='name'
              onMouseOver={(e) => handleClick(e)}
            >
              <FaEnvelopeOpen />
            </li>
            <li
              className='icon'
              data-label='email'
              onMouseOver={(e) => handleClick(e)}
            >
              <FaUser />
            </li>
            <li
              className='icon'
              data-label='age'
              onMouseOver={(e) => handleClick(e)}
            >
              <FaCalendarTimes />
            </li>
            <li
              className='icon'
              data-label='street'
              onMouseOver={(e) => handleClick(e)}
            >
              <FaMap />
            </li>
            <li
              className='icon'
              data-label='phone'
              onMouseOver={(e) => handleClick(e)}
            >
              <FaPhone />
            </li>
            <li
              className='icon'
              data-label='password'
              onMouseOver={(e) => handleClick(e)}
            >
              <FaLock />
            </li>
          </ul>

          <button className='btn' onClick={loadUser}>
            {loading ? 'Loading' : 'Random User'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
