import React from 'react'

const displayAuthor = (author) => {
  alert(author)
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={() => displayAuthor(author)}>diplay author</button>
    </article>
  )
}

export default Book
