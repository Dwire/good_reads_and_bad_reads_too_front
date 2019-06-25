import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/BrowserReset.css';
import './styles/BookShelf.css'
import './styles/BookShelf2.css'

// check this logic. should I do somthing like this in index instead?
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
