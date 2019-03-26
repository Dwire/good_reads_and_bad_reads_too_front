import React from 'react'

const RenderBook = ({book, addToReadingList, addToReadList}) => {
  console.log(book);
  return (
      <div>
        <h4>{book.best_book.title}</h4>
        <h7>{book.best_book.author.name}</h7>
        <br/>
        <img src={book.best_book.image_url} alt="small book"/>
        <input type="button" value='Get Knowledge' onClick={() => addToReadingList(book)}/>
        <input type="button" value='Got Knowledge' onClick={() => addToReadList(book)}/>
      </div>
  )
}

export default RenderBook
