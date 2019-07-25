import React, { Component } from 'react'
import { connect } from 'react-redux';
// import RenderUserBooks from '../components/RenderUserBooks'
import RenderUserBookSvg from '../components/RenderUserBookSvg'


class UserBooks extends Component {
  state = {
    ownedBook: true
  }

  handleClick = () => {
    this.setState({ownedBook: !this.state.ownedBook})
  }

  renderBookSvgs = (bookList) => {
    // const bookList = this.state.ownedBook ? this.props.readBooks :  this.props.readingList
    // if (bookList.length){
      const bookRow =  bookList.map(book => <RenderUserBookSvg key={book.id} book={book} />)
      return <div className='bookShelfContainer'>
              {bookRow}
            </div>
    // }else{
    //   return <div className='bookShelfContainer'>
    //         </div>
    // }
    // debugger
  }

  createBookShelfContatiner = () => {
    const bookList = this.state.ownedBook ? this.props.readBooks :  this.props.readingList

    const bookRowDivs = []
    
    let rowCount = 0
    let startSlice = 0
    let endSlice = 16
    // debugger
    while (startSlice < bookList.length || rowCount < 4){
      bookRowDivs.push(this.renderBookSvgs(bookList.slice(startSlice, endSlice)))
      rowCount += 1
      startSlice += 16
      endSlice += 16
    }
      return bookRowDivs
    }


  render() {
   console.log(this.props);
    return (
      <div>
        <h1>{this.state.ownedBook ? "My Library" : "Reading List"}  <button onClick={this.handleClick} >{this.state.ownedBook ? "Future Books" : "Owned Books"}</button></h1>
        <div id='bookDiv' className='classic-shelf'>
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
    readingList: state.user.reading_list
   }
}

export default connect(mapStateToProps, null)(UserBooks)
