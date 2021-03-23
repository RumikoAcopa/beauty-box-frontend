import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
  //Link
} from "react-router-dom";

import CategoryForm from "./containers/CategoryForm.js";
import ProductForm from "./containers/ProductForm.js";
import ProductListContainer from "./containers/ProductListContainer.js";
import Nav from "./components/Nav";
import ProductShowContainer from "./containers/ProductShowContainer";

function App() {
  return (
    <div className='App'>
      <h1>Beauty-Inventory-App</h1>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <ProductListContainer />
          </Route>

          <Route exact path='/products/:id' component={ProductShowContainer} />

          <Route path='/products/new' component={ProductForm}></Route>

          {/* <Route path='/products/show'>
            <ProductList />
            Product List
          </Route> */}

          <Route
            path='/products/:productId/categories/new'
            component={ProductListContainer}
          />

          <Route path='/categories' component={CategoryForm}>
            New Category
          </Route>

          <Route path='/categories/id'>Category List</Route>
        </Switch>
      </Router>
    </div>
  );
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
