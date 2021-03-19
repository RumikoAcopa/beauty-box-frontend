import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import CategoryList from "./components/CategoryList.js";
import ProductList from "./components/ProductList.js";
import CategoryForm from "./containers/CategoryForm.js";
import ProductForm from "./containers/ProductForm.js";
import ProductListContainer from "./containers/ProductListContainer.js";
import WelcomePage from "./components/WelcomePage";
import Nav from "./components/Nav";
import ProductShowContainer from "./containers/ProductShowContainer";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Beauty-Inventory-App</h1>

        <Router>
          <Nav />
          {/* <nav className='text-center bg-blue-900 text-yellow-100 p-4'>
            <NavLink
              className='inline-block px-4 py-2'
              activeClassName='text-yellow-300'
              exact
              to='/'
            >
              Home
            </NavLink>

            <NavLink
              className='inline-block px-4 py-2'
              activeClassName='text-yellow-300'
              exact
              to='/products'
            >
              New Product
            </NavLink>

            <NavLink
              className='inline-block px-4 py-2'
              activeClassName='text-yellow-300'
              exact
              to='/categories/new'
            >
              New Category
            </NavLink>
          </nav> */}

          <Switch>
            <Route exact path='/' component={WelcomePage} />

            <Route path='/products/:productId'>
              <ProductShowContainer />
              Product List
            </Route>

            <Route path='/products'>
              <ProductForm />
             
            </Route>

            <Route
              path='/products/:productId/categories/new'
              component={ProductListContainer}
            />

            <Route path='/categories'>
              <CategoryForm />
              New Category
            </Route>

            <Route path='/categories/id'>
              <CategoryList />
              Category List
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;

// const fetchedInventory = [
//   { id: 1, type: "add", quantity: 1, product: fetchedProducts[0] },
//   { id: 2, type: "remove", quantity: -20, product: fetchedProducts[0] },
//   { id: 3, type: "add", quantity: 10, product: fetchedProducts[1] },
//   { id: 4, type: "remove", quantity: -5, product: fetchedProducts[1] }
// ];

// class App extends React.Component {
//   state = {
//     fetchedProducts: [],
//     fetchedInventory,
//     count: 0
//   };
