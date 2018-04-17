import React, { Component } from 'react';
import logo from './logo.svg';
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      <div className="">
        <header className="Hello-header">
          <img src={logo} className="Hello-logo" alt="logo" />
          <h1 className="f1 tc">Welcome to React</h1>
        </header>
        <p className="Hello-intro">
          To get started, edit <code>src/Hello.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Hello;