import React, { Component } from 'react'
import InventoryTable from './components/InventoryTable.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'


const fetchedProducts = [
  {id: 1, name: 'Facial Cleanser'},
  {id: 2, name: 'Facial Toner'}

]

const fetchedInventory = [
  {id: 1, type: 'add', quantity: 1, product: fetchedProducts[0]},
  {id: 2, type: 'remove', quantity: -20, product: fetchedProducts[0]},
  {id: 1, type: 'add', quantity: 10, product: fetchedProducts[1]},
  {id: 2, type: 'remove', quantity: -5, product: fetchedProducts[1]}

]


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This Inventory App</h1>
      Hello
      <InventoryTable 
      products={fetchedProducts} 
      fetchedInventory={fetchedInventory} />
      </div>
    );
  }
}


export default App;
