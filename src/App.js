import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'


const products = [
  {id: 1, name: 'Name'}
]

const inventory = [
  {id: 1, type: '', quantity: 1, product: products[0]}
]

class App extends Component {
  render() {
    return (
      <div className="App">
      Hello
      </div>
    );
  }
}


export default App;
