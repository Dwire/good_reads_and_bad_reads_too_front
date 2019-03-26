import React, { Component } from 'react'

import Login from './Login'
import Register from './Register'

class Sessions extends Component {

  state = {
    logIn: true
  }


  render() {
    return (
      <div>
        {this.state.logIn ? <Login /> : <Register />}
      </div>
    )
  }
}


export default Sessions
