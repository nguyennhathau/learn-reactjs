import React from 'react'
import { Rating } from './star-rating'
import { css, jsx } from '@emotion/react'
import { useColors } from '../add-color-css/index'

export default function Color({
  id,
  title,
  color,
  rating,
  // handleDelete,
  // onRate,
}) {
  const { handleDelete, onRateColor } = useColors()
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
      <Rating ind={id} selectedStars={rating} onRate={onRateColor} />
    </section>
  )
}
