import React from 'react'

const RenderGoodReadsBook = ({book, addToReadingList, addToReadList}) => {
  return (
      <div>
        <h4>{book.title}</h4>
        <h6>{book.author.name}</h6>
        <br/>
        <img src={book.image_url} alt="small book"/>
        <input type="button" value='Get Knowledge' onClick={() => addToReadingList(book)}/>
        <input type="button" value='Got Knowledge' onClick={() => addToReadList(book)}/>
      </div>
  )
}

export default RenderGoodReadsBook
