import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'
// import Register from './Register'

import { setLogin } from '../../actions/sessionsActions'
import { setUser } from '../../actions/userActions'
import userAdapter from '../../adapters/userAdapter'

class Login extends Component {

  state = {
    user: {
      email: '',
      password: '',
    },
    // route: ''
  }

  handleChange = (e) => {
    const user = {...this.state.user, [e.target.name]: e.target.value}
    this.setState({user})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    userAdapter.create(this.state)
    .then(this.setLocalStorage)
  }

  setLocalStorage = (res) => {
    window.localStorage.setItem('jwt', res.jwt)
    this.props.setLogin()
    this.props.setUser(res.user)
  }

  render() {
    return (
      <div>
        <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} email={this.state.user.email} password={this.state.user.password}/>
      </div>
    )
  }
}


export default connect(null, { setLogin, setUser })(Login)
