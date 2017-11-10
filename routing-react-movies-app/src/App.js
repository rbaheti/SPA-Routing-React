import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import MoviesList from './components/MoviesList';
import EachMovie from './components/EachMovie';

import './App.css';

class App extends Component {
  render() {
    return (
    	<Switch>
    		<Route exact={true} path="/" component={MoviesList} />
            <Route exact={true} path='/movie/:id' component={EachMovie}/>
    	</Switch>
    );
  }
}

export default App;