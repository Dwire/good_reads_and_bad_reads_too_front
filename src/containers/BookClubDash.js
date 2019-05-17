import React, { Component } from 'react'
import GoodReadsSearch from './GoodReadsSearch'


class BookClubDash extends Component {
  render() {
    return (
      <div>
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

export default BookClubDash;
