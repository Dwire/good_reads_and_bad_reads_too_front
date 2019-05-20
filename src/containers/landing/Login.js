import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm'
// import UserDash from './UserDash'
// import Register from './Register'

import { setLogin, setInitialState } from '../../actions/sessionsActions'
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

  componentDidMount(){
    // debugger
    let token = window.localStorage.getItem('jwt')

    if (token) {
      sessionsAdapter.reauth(token)
      .then(this.props.setUser)
    }
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
    // this.props.setLogin()
    // this.props.setUser(res.user)
    this.props.setInitialState(res.user)
  }

  render() {
    return (
      <Fragment>
        { this.props.loggedIn ? <Redirect to='users'/> : <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} email={this.state.user.email} password={this.state.user.password} origin={"login"}/> }
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.session.loggedIn }
}

export default connect(mapStateToProps, { setLogin, setUser, setInitialState })(Login)
