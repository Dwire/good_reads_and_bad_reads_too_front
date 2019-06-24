import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoodReadsSearch from './GoodReadsSearch'
import MemberCard from '../components/MemberCard'


class BookClubDash extends Component {

  state = {
    members: false
  }

  showMembers = () => {
    this.setState({members: !this.state.members})
  }

  memberCard = () => {
    return this.props.currentClub.members.map(member => <MemberCard key={member.id} member={member} />)
  }

  render() {
    console.log("CLUB DASH", this.props);
    return (
      <div>
        <h1>{this.props.currentClub.name}</h1>
        <h4>GR Search</h4>
        <GoodReadsSearch />
        <h4 onClick={this.showMembers}>Members List</h4>
        {this.state.members ? this.memberCard() : null}
        <ul>
          <li>Book Club Dash</li>
          <ul>
            <li>top reviewed books</li>
            <li>most read books</li>
            <li>most recently added books</li>
          </ul>
          <li>Reading List for book club</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentClub: state.bookClub.currentClub
  }
}

export default connect(mapStateToProps, null)(BookClubDash);
