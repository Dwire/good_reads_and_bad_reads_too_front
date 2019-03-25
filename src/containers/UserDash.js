import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserList from '../components/UserList'
import BookClubs from '../components/BookClubs'
import GoodReadsSearch from '../components/GoodReadsSearch'
// import BookSearch from '../components/BookSearch'
// import UserReadingList from '../components/UserReadingList'
// import UserBooks from '../components/UserBooks '

import { setUser } from '../actions/userActions'
import userAdapter from '../adapters/userAdapter'

class UserDash extends Component {

  componentDidMount(){
    userAdapter.index()
    .then(this.props.setUser)
  }

  render() {
    // const myApiKey = process.env.REACT_APP_GOOD_READS_API_KEY
    return (
      <div>
        <GoodReadsSearch />
        <UserList />
        <BookClubs />
      </div>
    );
  }
}


export default connect(null, {  setUser })(UserDash)
