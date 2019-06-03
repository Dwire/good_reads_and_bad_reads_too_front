import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoodReadsSearch from './GoodReadsSearch'


class BookClubDash extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.currentClub.name}</h1>
        <p>GR Search</p>
        <GoodReadsSearch />
        <ul>
          <li>Book Club Dash</li>
          <li>Members List</li>
          <ul>
            <li>top reviewed books</li>
            <li>most read books</li>
            <li>most recently added books</li>
          </ul>
          <li>Reading List for book club</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentClub: state.bookClub.currentClub
  }
}

export default connect(mapStateToProps, null)(BookClubDash);
