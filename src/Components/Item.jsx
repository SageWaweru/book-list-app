import React from 'react'

function Item({data}) {
  return (
    <div className='book-c'>
        <img src={data.image.src} alt='book' />
        <h2>{data.title}</h2>
        <h3>By: {data.author}</h3>

    </div>
  )
}

export default Item