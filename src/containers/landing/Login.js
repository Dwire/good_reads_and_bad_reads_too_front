import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm'
// import UserDash from './UserDash'
// import Register from './Register'

import { setLogin } from '../../actions/sessionsActions'
import { setUser } from '../../actions/userActions'
import sessionsAdapter from '../../adapters/sessionsAdapter'

class Login extends Component {

  state = {
    user: {
      email: '',
      password: ''
    },
    // route: ''
  }

  handleChange = (e) => {
    const user = {...this.state.user, [e.target.name]: e.target.value}
    this.setState({user})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    sessionsAdapter.login(this.state)
    .then(this.setLocalStorage)
  }

  setLocalStorage = (res) => {
    window.localStorage.setItem('jwt', res.jwt)
    this.props.setLogin()
    this.props.setUser(res.user)
  }

  render() {
    // console.log(this.props.history);
    return (
      <div>
        { this.props.login ? <Redirect to='users'>User Page</Redirect> : <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} email={this.state.user.email} password={this.state.user.password} origin={"login"}/> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.session.loggedIn }
}

export default connect(mapStateToProps, { setLogin, setUser })(Login)
