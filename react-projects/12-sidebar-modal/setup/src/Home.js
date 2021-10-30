import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext()

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSideBar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show Modal
      </button>
    </main>
  )
}

export default Home
