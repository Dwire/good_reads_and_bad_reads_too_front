import React, { Component } from 'react'

// refactor these search components
import GoodReadsSearchResults from '../components/GoodReadsSearchResults'

class GoodReadsSearch extends Component {
  state = {
    searchTerm: '',
  }

  handleChange = (e) => {
    const searchTerm = e.target.value
    this.setState({searchTerm})
  }

  render() {
    console.log(this.state.searchTerm);
    return (
      <div>
        <h1>FIND A BOOK</h1>
        <form >
          <input type="text" placeholder='Search For A Book' onChange={this.handleChange}/>
        </form>
        <GoodReadsSearchResults term={this.state.searchTerm}/>
      </div>
    )
  }
}


export default GoodReadsSearch
