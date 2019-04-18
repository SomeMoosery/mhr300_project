import React, { Component } from 'react';
import Header from './components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header />
      </div>
    );
  }
}

export default App;
