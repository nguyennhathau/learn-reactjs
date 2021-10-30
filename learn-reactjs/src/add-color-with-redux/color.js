import React from 'react'
// import { Rating } from './star-rating'
import { css, jsx } from '@emotion/react'
// import { useColors } from '../add-color-css/index'
import { useDispatch } from 'react-redux'
import { addColor } from './addColorSlice'
import store from '../app/store'

export default function Color({ id, title, color, rating }) {
  // const { handleDelete, onRateColor } = useColors()

  const dispatch = useDispatch()
  return (
    <section>
      <div style={{ backgroundColor: color, height: 50 }}>
        <span>{title}</span>
        <button
          onClick={() => store.dispatch(addColor)}
          className='material-icons delete'
        >
          delete
        </button>
      </div>
      {/* <Rating ind={id} selectedStars={rating} onRate={onRateColor} /> */}
    </section>
  )
}
