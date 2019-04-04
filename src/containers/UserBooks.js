import React, { Component } from 'react'
import { connect } from 'react-redux';
import RenderUserBooks from '../components/RenderUserBooks'

class UserBooks extends Component {
  state = {
    ownedBook: true
  }

  handleClick = () => {
    this.setState({ownedBook: !this.state.ownedBook})
  }

  render() {
    return (
      <div>
        <h1>{this.state.ownedBook ? "My Library" : "Reading List"}  <button onClick={this.handleClick} >{this.state.ownedBook ? "Future Books" : "Owned Books"}</button></h1>

        <RenderUserBooks books={this.state.ownedBook ? this.props.readBooks : this.props.readingList} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    readBooks: state.user.read_books,
    readingList: state.user.reading_list
   }
}

export default connect(mapStateToProps, null)(UserBooks)
