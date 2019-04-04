import React from 'react'

const RenderUserBookSvg = ({book}) => {
  return (
      <div>
        <h4>{book.title}</h4>
        <h6>{book.author.name}</h6>
      </div>
  )
}

export default RenderUserBookSvg
