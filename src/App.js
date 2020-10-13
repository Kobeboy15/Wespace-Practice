import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about'
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <main className="app__container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    );
  }
}
