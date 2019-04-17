import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pricing from './components/Pricing';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <Header />
      //     <Pricing />
      //   </div>

      //   <Route path = '/' exact component={App} />
      //   <Route path = 'pricing' exact component={Pricing} />
      // </Router>

      <div className="App">
        <Header />
        <Pricing />
      </div>
    );
  }
}

export default App;
