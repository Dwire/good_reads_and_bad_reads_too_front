import React, { Component } from 'react';
import MemberCard from './MemberCard';
import { Link } from 'react-router-dom'

class BookClubCard extends Component {
  state = {
    members: false
  }

  handleClick = () => {
    this.setState({members: !this.state.members})
  }

  showMembers = () => {
    return this.props.bookClub.members.map(member => <MemberCard key={member.id} member={member} />)
  }

  render() {
    return (
      <div>
        <h3><Link to='/book_clubs'>{this.props.bookClub.name}</Link></h3>
        <button onClick={this.handleClick}>{this.state.members ? 'Hide Members' : 'Show Members'}</button>
        {this.state.members ? this.showMembers() : null}
      </div>
    )
  }
}

export default BookClubCard
