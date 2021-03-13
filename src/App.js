import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'


const fetchedProducts = [
  {id: 1, name: 'Name'}
]

const fetchedInventory = [
  {id: 1, type: '', quantity: 1, product: fetchedProducts[0]}
]

function ProductComponent(props) {
  console.log("ProductComponent props", props)
  const productName = props.products[0].name
  console.log("ProductComponent productName", productName)

  return (
    <p>Name: {productName}</p>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
      Hello
      <ProductComponent 
      products={fetchedProducts} 
      fetchedInventory={fetchedInventory} />
      </div>
    );
  }
}


export default App;
