import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { toggleShelfDisplay } from '../actions/settingsAndFormAction'

// import BookSVG from './BookSVG'

// import randomColor from 'randomcolor'
// import bookSvg from '../book_side.svg'

const RenderUserBookSvg = ({book, toggleShelfDisplay}) => {
  console.log(book);
  return (
    <div class='book' onClick={toggleShelfDisplay}>
      <div class="stripe"></div>
      <p>{book.title.substring(0, 25)}</p>
      <div id="bottom-stripes">
        <div class="stripe"></div>
        <div class="stripe"></div>
      </div>
    </div>
  )
}

export default connect(null, { toggleShelfDisplay })(RenderUserBookSvg)

// <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
