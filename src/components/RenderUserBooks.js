import React from 'react';
import RenderUserBookSvg from './RenderUserBookSvg';

const RenderUserBooks = ({ books, owned }) => {
  const bookList = books.map(book => <RenderUserBookSvg key={book.id} book={book} />)
  return (
    <div>
      <h1>{owned ? "My Library" : "Reading List"}</h1>
      <ul>
        { bookList }
      </ul>
    </div>
  )
}

RenderUserBooks.defaultProps = {
  books: []
};

export default RenderUserBooks
