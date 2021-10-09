import React, { useState } from 'react'
import Star from './star'

let displayStar = 5

export function Rating() {
  const [select, setSelect] = useState(0)

  return (
    <>
      <div style={{ backgroundColor: 'lightblue' }}>
        {[...Array(displayStar)].map((n, i) => (
          <Star
            key={i}
            selected={select > i}
            onSelect={() => {
              setSelect(i + 1)
            }}
          />
        ))}
      </div>
    </>
  )
}
