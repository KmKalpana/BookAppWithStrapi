import './book.css'
import { useNavigate } from 'react-router-dom'
import React from 'react'
function Book({title, image, authors = [], publisher, publishDate, id}) {

  const navigate = useNavigate()

  return (
    <div className='book' onClick={() => navigate(`/detail/${id}`)}>
      <img src={image} alt='book'/>
      <div className='book_desc'>
        <h4>{title}</h4>
        <div className='book_authors'>
          By: {authors?.map((author, i) => (
            <span key={i}>{author}</span>
          ))}
        </div>
        <span>{publisher}, {publishDate}</span>
      </div>
    </div>
  )
}

export default Book
