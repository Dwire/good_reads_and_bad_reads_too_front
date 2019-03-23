  import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom';

// import Login from '../containers/Login'
// import Register from '../containers/Register'
import SplashPage from '../containers/SplashPage'
import UserDash from '../containers/UserDash'
import BookClubDash from '../containers/BookClubDash'


// import EditProfileForm from '../components/EditProfileForm'

class Routes extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/users" component={UserDash} />
        <Route path="/book_clubs" component={BookClubDash} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
