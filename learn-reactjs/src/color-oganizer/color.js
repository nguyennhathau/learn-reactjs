import React from 'react'
import { Rating } from './star-rating'

export default function Color({ title, color, rating }) {
  return (
    <section>
      <div style={{ backgroundColor: color, height: 50 }}>{title}</div>
      <Rating selectedStars={rating} />
    </section>
  )
}
