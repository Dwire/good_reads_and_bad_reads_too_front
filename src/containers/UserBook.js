import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleShelfDisplay } from '../actions/settingsAndFormAction'


const UserBooks = ({toggleShelfDisplay}) => {
    return (
      <div class='single-book-shelf'>
        <h1>SINGLE BOOK</h1>
        <button onClick={toggleShelfDisplay}>Back to Shelf</button>
      </div>
    );
}

// const mapStateToProps = state => {
//   return {
//     displayShelf: state.settingsAndFormReducer.displayShelf
//    }
// }

export default connect(null, { toggleShelfDisplay })(UserBooks)

