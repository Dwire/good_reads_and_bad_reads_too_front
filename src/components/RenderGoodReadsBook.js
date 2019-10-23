import React from 'react'

const RenderGoodReadsBook = ({book, addToReadingList, addToReadList}) => {
  console.log(book);
  return (
      <div class='book-result'>
        <h6>{book.title.substr(0, 25)}...</h6>
        <h6>{book.author.name}</h6>
        <img src={book.image_url} alt='book cover'/>
        <br/>
        <input type="button" value='Get Knowledge' onClick={() => addToReadingList(book)}/>
        <input type="button" value='Got Knowledge' onClick={() => addToReadList(book)}/>
      </div>
  )
}

export default RenderGoodReadsBook
