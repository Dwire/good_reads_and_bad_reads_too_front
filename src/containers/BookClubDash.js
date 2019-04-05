import React, { Component } from 'react'


class BookClubDash extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Book Club Dash</li>
          <li>GR Search</li>
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
