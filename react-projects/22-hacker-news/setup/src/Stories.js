import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { removeStory, hits } = useGlobalContext()
  return (
    <div className='stories'>
      {hits.map((hit, index) => {
        return (
          <article className='story' key={index}>
            <h3 className='title'>{hit.title}</h3>
            <p className='info'>
              {hit.points} points by {hit.author} | {hit.num_comments} comments
            </p>
            <a href={hit.url} target='_blank' className='read-link'>
              Read more
            </a>
            <button onClick={() => removeStory(index)} className='remove-btn'>
              Remove
            </button>
          </article>
        )
      })}
    </div>
  )
}

export default Stories
