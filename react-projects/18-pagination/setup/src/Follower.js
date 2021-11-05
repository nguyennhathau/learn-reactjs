import React from 'react'

const Follower = ({ avatar_url, login, html_url }) => {
  return (
    <>
      <article className='card'>
        <img src={avatar_url} />
        <h4>{login}</h4>
        <a href={html_url} target='_blank' className='btn btn-container'>
          View Profile
        </a>
      </article>
    </>
  )
}

export default Follower
