import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserList from './UserList'
import BookClubs from '../components/BookClubs'
import GoodReadsSearch from './GoodReadsSearch'
// import BookSearch from '../components/BookSearch'
// import UserReadingList from '../components/UserReadingList'
// import UserBooks from '../components/UserBooks '

import sessionsAdapter from '../adapters/sessionsAdapter'

import { setUser } from '../actions/userActions'
import { setLogin } from '../actions/sessionsActions'
// import userAdapter from '../adapters/userAdapter'

class UserDash extends Component {

// NOTE: do not want to set all users
  componentDidMount(){
    let token = window.localStorage.getItem('jwt')
    sessionsAdapter.reauth(token)
    .then(this.setUser)
  }

  setUser = (res) => {
    this.props.setLogin()
    this.props.setUser(res.user)
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


export default connect(null, {  setUser, setLogin })(UserDash)
