import React, { Component } from 'react'
import { connect } from 'react-redux';
// import RenderUserBooks from '../components/RenderUserBooks'
import RenderUserBookSvg from '../components/RenderUserBookSvg'
import { setShelfStyle, toggleBookLists } from '../actions/settingsAndFormAction'


class UserBooks extends Component {
  renderBookSvgs = (bookList) => {
    // const bookList = this.state.ownedBook ? this.props.readBooks :  this.props.readingList
    // if (bookList.length){
      const bookRow =  bookList.map(book => <RenderUserBookSvg key={book.id} book={book} />)
      return <div className= {`${this.props.shelfStyle}-shelf`}>
              {bookRow}
            </div>
    // }else{
    //   return <div className='bookShelfContainer'>
    //         </div>
    // }
    // debugger
  }

  createBookShelfContatiner = () => {
    const bookList = this.props.ownedBooks ? this.props.readBooks :  this.props.readingList

    const bookRowDivs = []
    
    let rowCount = 0
    let startSlice = 0
    let endSlice = 15
    // debugger
    while (startSlice < bookList.length || rowCount < 4){
      bookRowDivs.push(this.renderBookSvgs(bookList.slice(startSlice, endSlice)))
      rowCount += 1
      startSlice += 15
      endSlice += 15
    }
      return bookRowDivs
  }


  render() {
   console.log(this.props);
    return (
      <div>
        <h1>{this.props.ownedBooks ? "My Library" : "Reading List"}</h1>
        <button onClick={this.props.toggleBookLists} >{this.props.ownedBooks ? "Show Wish List" : "Show Read Books"}</button>
        <select value={this.props.shelfStyleonChange} onChange={this.props.setShelfStyle}>
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
          <option value="list">List</option>
        </select>
        <div id='bookDiv'>
          {this.createBookShelfContatiner()}
        </div>
      </div>
    );
  }
}


UserBooks.defaultProps = {
  readBooks: [],
  readingList: []
}

const mapStateToProps = state => {
  return {
    readBooks: state.user.read_books,
    readingList: state.user.reading_list,
    shelfStyle: state.settingsAndFormReducer.shelfStyle,
    ownedBooks: state.settingsAndFormReducer.ownedBooks
   }
}

export default connect(mapStateToProps, { setShelfStyle, toggleBookLists })(UserBooks)
