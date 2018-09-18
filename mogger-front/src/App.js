import React, { Component } from 'react';
import Navbar from '../src/components/Navbar';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import ViewContainer from './components/ViewContainer';
import ViewItem from './components/ViewItem';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/view" component={ViewContainer} />
          <Route exact path="/view/:id" component={ViewItem} />
          <Route exact path="/post" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// turn this into container
