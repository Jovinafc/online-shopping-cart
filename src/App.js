import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router';
import { NavLink } from 'react-router-dom'

const Navigation = (props) => <nav>
    <ul>
    <li><NavLink  to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
    </ul>
</nav>

class App extends Component {
  render() {
    return (
        <div>
            <h1 className="header">The Jersey Store</h1>

            <div className="page-container">

        <Navigation />
        <Router />
      </div>
        </div>
    );
  }
}

export default App;
