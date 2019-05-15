import React, { Component } from 'react'
import { connect } from 'react-redux'

import BookClubs from '../components/BookClubs'
import GoodReadsSearch from './GoodReadsSearch'
import UserBooks from './UserBooks'
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

// NOTE: User should already be set
  setUser = (res) => {
    // this.props.setLogin()
    this.props.setUser(res.user)
  }

  render() {
    return (
      <div className='user-dash'>
        <BookClubs />
        <UserBooks />
        <GoodReadsSearch />
        {/* some statistic how many books you have completed this month etc */}
      </div>
    );
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


export default connect(mapStateToProps, {  setUser, setLogin })(UserDash)
