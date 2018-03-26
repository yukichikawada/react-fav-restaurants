import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Recipe from './Recipe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
          title="pizza" 
          ingredients={["dough", "olive oil", "veggies"]}
          instructions="Go to Arizmendi's on Lakeshore"
          img="http://pixel.nymag.com/imgs/slideshows/2013/02/sf-pizza/arizmendi-pizza.nocrop.w670.h458.jpg"/>
      </div>
    );
  }
}

export default App;
