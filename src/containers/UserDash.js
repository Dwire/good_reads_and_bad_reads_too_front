import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserList from '../components/UserList'
import BookClubs from '../components/BookClubs'
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
    return (
      <div>
        <UserList />
        <BookClubs />
      </div>
    );
  }
}


export default connect(null, {  setUser })(UserDash)
