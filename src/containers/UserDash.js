import React, { Component } from 'react'
import { connect } from 'react-redux'

import BookClubs from '../components/BookClubs'
import GoodReadsSearch from './GoodReadsSearch'
import UserBooks from './UserBooks'
import UserBook from './UserBook'
import UserAnalytics from './UserAnalytics'
// import BookSearch from '../components/BookSearch'
// import UserReadingList from '../components/UserReadingList'


import sessionsAdapter from '../adapters/sessionsAdapter'

import { setUser } from '../actions/userActions'
import { setBookClubs } from '../actions/bookClubActions'
import { setLogin } from '../actions/sessionsActions'
// import userAdapter from '../adapters/userAdapter'

class UserDash extends Component {

// NOTE: do not want to set all users
  componentDidMount(){
    let token = window.localStorage.getItem('jwt')

    if (token) {
      sessionsAdapter.reauth(token)
      .then(this.setUser)
    }
  }

// NOTE: User should already be set - Maybe Run through login HOC
  setUser = (res) => {
    // this.props.setLogin()
    const {book_clubs, ...user} = res.user
    this.props.setUser(user)
    this.props.setBookClubs(book_clubs)
  }

  render() {
    console.log("user", this.props);
    return (
      <div className='user-dash'>
        <div>
          <GoodReadsSearch />
          <BookClubs history={this.props.history} />
        </div>
        {this.props.displayShelf ? <UserBooks /> : <UserBook />}
        <UserAnalytics />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    bookClubs: state.user.book_clubs,
    readBooks: state.user.read_books,
    readingList: state.user.reading_list,
    displayShelf: state.settingsAndFormReducer.displayShelf
   }
}


export default connect(mapStateToProps, {  setUser, setLogin, setBookClubs })(UserDash)
