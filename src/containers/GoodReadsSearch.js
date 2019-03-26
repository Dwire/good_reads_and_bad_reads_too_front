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
        <form >
          <input type="text" onChange={this.handleChange}/>
        </form>
        <GoodReadsSearchResults term={this.state.searchTerm}/>
      </div>
    )
  }
}


export default GoodReadsSearch
