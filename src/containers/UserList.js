import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserList extends Component {

  render

 render() {
   return (
     <div>
     hiii
     </div>
   )
 }
}


const mapStateToProps = state => {
  return {
    user: state.user,
    bookClubs: state.user.book_clubs,
    readBooks: state.user.read_books,
    readingList: state.user.reading_list
   }
}


export default connect(mapStateToProps, null)(UserList)
