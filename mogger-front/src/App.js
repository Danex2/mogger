import React, { Component } from 'react';
import Navbar from '../src/components/Navbar';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import ViewContainer from './components/ViewContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/view" component={ViewContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// turn this into container
