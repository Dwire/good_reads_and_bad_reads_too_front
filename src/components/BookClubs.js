import React from 'react'
import { connect } from 'react-redux';

import BookClubCard from './BookClubCard';

const BookClubs = ({ bookClubs }) => {
  // debugger
  const renderBookClubCards = bookClubs.map(bookClub => <BookClubCard key={bookClub.id} bookClub={bookClub}/>)
  return (
    <div>
      <h1>Your Book CLubs</h1>
      {renderBookClubCards}
    </div>
  )
}

const mapStateToProps = state => {
  debugger
  return {
    bookClubs: state.book_club.allClubs
   }
}

BookClubs.defaultProps = {
  bookClubs: []
}

export default connect(mapStateToProps, null)(BookClubs)
