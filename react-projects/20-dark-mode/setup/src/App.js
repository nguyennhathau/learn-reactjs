import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const light_theme = 'light-theme'
const dark_theme = 'dark-theme'

const getLocalStorage = () => {
  let themeLocal = light_theme
  if (localStorage.getItem('theme')) {
    themeLocal = localStorage.getItem('theme')
  }
  return themeLocal
}

function App() {
  const [theme, setTheme] = useState(getLocalStorage())

  const handleClick = () => {
    if (theme === light_theme) {
      setTheme(dark_theme)
    } else {
      setTheme(light_theme)
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.getElementsByTagName('body')[0].className = theme
    //document.documentElement.className = theme;
  }, [theme])
  return (
    <main>
      <section className='section'>
        <div className='nav-center'>
          <h1>Overreacted</h1>
          <button className='btn' onClick={handleClick}>
            Toggle
          </button>
        </div>
        <div className='articles'>
          {data.map((item, index) => {
            return <Article key={index} {...item} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App
