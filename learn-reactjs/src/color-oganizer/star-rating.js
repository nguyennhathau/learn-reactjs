import React from 'react'
import Star from './star'

let displayStar = 5

export function Rating({ selectedStars = 0 }) {
  return (
    <>
      <div style={{ backgroundColor: 'lightblue' }}>
        {[...Array(displayStar)].map((n, i) => (
          <Star key={i} selected={selectedStars > i} />
        ))}
      </div>
    </>
  )
}
