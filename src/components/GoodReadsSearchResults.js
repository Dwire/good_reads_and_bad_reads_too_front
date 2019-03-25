import React, { Component } from 'react'

import goodReadsAdapter from '../adapters/goodReadsAdapter'

class GoodReadsSearchResults extends Component {

  searchGoodReads = () => {
    if (this.props.term.length > 1){
      goodReadsAdapter.search(this.props.term)
    }else{
      return "TEST"
    }
  }

  render() {
    return (
      <div>
        {this.searchGoodReads()}
      </div>
    )
  }
}

export default GoodReadsSearchResults
