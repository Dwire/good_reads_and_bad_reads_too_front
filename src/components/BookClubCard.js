import React, { Component } from 'react';
import MemberCard from './MemberCard';

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
        <h3>{this.props.bookClub.name}</h3>
        <button onClick={this.handleClick}>{this.state.members ? 'Hide Members' : 'Show Members'}</button>
        {this.state.members ? this.showMembers() : null}
      </div>
    )
  }
}

export default BookClubCard
