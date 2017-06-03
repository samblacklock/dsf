import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/component';
import Slider from './components/Slider/component';
import Products from './components/Products/component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
        <Products />
      </div>
    );
  }
}

export default App;
