  import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom';

import Login from '../containers/landing/Login'
// import Register from '../containers/Register'
import Sessions from '../containers/landing/Sessions'
import SplashPage from '../containers/landing/SplashPage'
import UserDash from '../containers/UserDash'
import BookClubDash from '../containers/BookClubDash'


// import EditProfileForm from '../components/EditProfileForm'

class Routes extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/sessions" component={Sessions} />
        <Route exact path="/login" component={Login} />
        <Route path="/users" component={UserDash} />
        <Route path="/book_clubs" component={BookClubDash} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
