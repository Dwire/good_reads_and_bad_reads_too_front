import React, { Fragment } from 'react'
import BookSVG from './BookSVG'
// import randomColor from 'randomcolor'
// import bookSvg from '../book_side.svg'

const RenderUserBookSvg = ({book}) => {
  return (
    <Fragment>
      <BookSVG book={book}/>
    </Fragment>
  )
}

export default RenderUserBookSvg

// <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
