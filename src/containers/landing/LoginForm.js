import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = (props) => {

  const login = () => {
    return (
      <div>
        <form onSubmit={props.handleSubmit} >
          <input type="text" name="email" placeholder='Email' value={props.email} onChange={props.handleChange} />
          <input type="password" name="password" placeholder="Password" value={props.password} onChange={props.handleChange} />
          <input type="submit" />
        </form>
        <Link to="/register">Don't Have an Account Yet?</Link>
      </div>
    )
  }

  const signUp = () => {
    return (
      <div>
        <form onSubmit={props.handleSubmit} >
          <input type="text" name="email" placeholder='Email' value={props.email} onChange={props.handleChange} />
          <input type="password" name="password" placeholder="Password" value={props.password} onChange={props.handleChange} />
          <input type="submit" />
        </form>
        <Link to="/login">Already Have an Account?</Link>
      </div>
    )
  }

    return (
      <Fragment>
        {props.origin === 'login' ? login() : signUp()}
      </Fragment>  
    )
  }

export default LoginForm
