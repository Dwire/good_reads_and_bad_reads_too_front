import React from 'react'

const LoginForm = (props) => {
    return (
      <div>
        <form onSubmit={props.handleSubmit} >
          <input type="text" name="email" placeholder='Email' value={props.email} onChange={props.handleChange} />
          <input type="text" name="password" placeholder="Password" value={props.password} onChange={props.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }

export default LoginForm
