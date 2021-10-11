import React from 'react'
import Star from './star'

let displayStar = 5

export function Rating({ ind, selectedStars = 0, onRate }) {
  return (
    <>
      <div style={{ backgroundColor: 'lightblue' }}>
        {[...Array(displayStar)].map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => onRate(ind, i + 1)}
          />
        ))}
      </div>
    </>
  )
}
