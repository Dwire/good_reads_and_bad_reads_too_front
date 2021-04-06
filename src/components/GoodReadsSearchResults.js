import React, { Component } from 'react'

import RenderGoodReadsBook from './RenderGoodReadsBook'
import goodReadsAdapter from '../adapters/goodReadsAdapter'

class GoodReadsSearchResults extends Component {

  state = {
    books: []
  }

  // componentDidUpdate(prevProps) {
  //   // console.log('prev', prevProps);
  //   if (prevProps.term !== this.props.term && this.props.term.length > 3){
  //     let token = window.localStorage.getItem('jwt')
  //     goodReadsAdapter.search(this.props.term, token)
  //     .then(json => {
    //       const books = json.GoodreadsResponse.search.results.work
    //       this.setBookList(books)
    //     })
    //   }else if (prevProps.term !== this.props.term && this.props.term.length < 3){
      //     this.setBookList([])
      //   }else{
        //     console.log('TEST1');
        //     return "TEST"
        //   }
        // }
        
  componentDidUpdate(prevProps) {
      // console.log('prev', prevProps);
    if (prevProps.term !== this.props.term && this.props.term.length > 4){
      let token = window.localStorage.getItem('jwt')
      goodReadsAdapter.search(this.props.term, token)
      .then((googleRes) => {
        const books = googleRes.items
        this.setBookList(books)
      })
    }else if (prevProps.term !== this.props.term && this.props.term.length < 3){
      this.setBookList([])
    }else{
      console.log('TEST1');
      return "TEST"
    }
  }

  setBookList = (books) => {
    this.setState({books})
  }

  listBooksFromApi = () => {
    const books = this.state.books
    if (Array.isArray(books)) {
      return books.map(book => <RenderGoodReadsBook book={book.volumeInfo} addToReadingList={this.addToReadingList} addToReadList={this.addToReadList}/>)
    }else if (books !== undefined) {
      return <RenderGoodReadsBook book={books.volumeInfo} addToReadingList={this.addToReadingList} addToReadList={this.addToReadList} />
    }
  }

  addToReadingList = (book) => {
    console.log(book);
  }

  addToReadList = (book) => {
    console.log(book);
  }

  render() {
    console.log("STATE", this.state.books);
    return (
      <div id='book-search-list'>
        {this.listBooksFromApi()}
      </div>
    )
  }
}

export default GoodReadsSearchResults
