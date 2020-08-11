import React, { Component } from 'react';
import './App.scss';
import Store from './components/Store';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Store></Store>
      </main>
    );
  }
}

export default App;
