import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isSideBarOpen, closeSidebar } = useGlobalContext()

  return (
    <div
      className={`${
        isSideBarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        {sublinks.map((item, i) => {
          const { page, links } = item
          return (
            <article key={i}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {links.map((link, index) => {
                  const { label, icon, url } = link
                  return (
                    <a href={url} key={index}>
                      {icon} {label}
                    </a>
                  )
                })}
              </div>
            </article>
          )
        })}
        <button className='btn close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </aside>
    </div>
  )
}

export default Sidebar
