import React from 'react'
import moment from 'moment'
const Article = ({ title, date, snippet, length }) => {
  const formatDate = moment(date).format('dddd Do, YYYY')
  return (
    <div className='post'>
      <h2>{title}</h2>
      <p className='post-info'>
        {formatDate} {length} min read
      </p>
      <p>{snippet}</p>
    </div>
  )
}

export default Article
