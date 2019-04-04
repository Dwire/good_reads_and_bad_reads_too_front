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
        <button onClick={this.handleClick} >{this.state.ownedBook ? "Owned Books" : "Future Books"}</button>
        <RenderUserBooks books={this.state.ownedBook ? this.props.readBooks : this.props.readingList} owned={this.state.ownedBook} />
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
