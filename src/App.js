import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/Navbar'
import Home from './components/Home'
import Config from './components/Config'
import Jsx from './components/Jsx'


import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/config' component={Config} exact/>
            <Route path='/jsx' component={Jsx} exact/>
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
