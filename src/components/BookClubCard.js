import React, { Component } from 'react';
import { connect } from 'react-redux'
import MemberCard from './MemberCard';
import { setBookClub } from '../actions/bookClubActions'

class BookClubCard extends Component {
  state = {
    members: false
  }

  handleClick = () => {
    this.setState({members: !this.state.members})
  }

  handleClickToBookClub = () => {
    console.log("MOMENTS", this.props);
    this.props.setBookClub(this.props.bookClub)
    this.props.history.push('/book_clubs')

  }

  showMembers = () => {
    return this.props.bookClub.members.map(member => <MemberCard key={member.id} member={member} />)
  }

  render() {
    return (
      <div>
        <h3 onClick={this.handleClickToBookClub}>{this.props.bookClub.name}</h3>
        <button onClick={this.handleClick}>{this.state.members ? 'Hide Members' : 'Show Members'}</button>
        {this.state.members ? this.showMembers() : null}
      </div>
    )
  }
}

export default connect(null, { setBookClub })(BookClubCard)
