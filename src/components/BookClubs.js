import React from 'react'
import { connect } from 'react-redux';

import BookClubCard from './BookClubCard';

const BookClubs = ({ bookClubs, history }) => {
  // debugger
  const renderBookClubCards = bookClubs.map(bookClub => <BookClubCard key={bookClub.id} bookClub={bookClub} history={history}/>)
  return (
    <div>
      <h1>Your Book CLubs</h1>
      {renderBookClubCards}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    bookClubs: state.bookClub.allClubs
   }
}

BookClubs.defaultProps = {
  bookClubs: []
}

export default connect(mapStateToProps, null)(BookClubs)
