import React from 'react'
import { Rating } from './star-rating'

export default function Color({
  id,
  title,
  color,
  rating,
  handleDelete,
  onRate,
}) {
  return (
    <section>
      <div style={{ backgroundColor: color, height: 50 }}>
        <span>{title}</span>
        <button
          onClick={() => handleDelete(id)}
          className='material-icons delete'
        >
          delete
        </button>
      </div>
      <Rating ind={id} selectedStars={rating} onRate={onRate} />
    </section>
  )
}
