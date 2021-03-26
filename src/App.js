import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

//import CategoryForm from "./containers/CategoryForm.js";
import ProductForm from "./containers/ProductForm.js";
import ProductListContainer from "./containers/ProductListContainer.js";
import ProductDetail from "./containers/ProductDetail.js";
import Nav from "./components/Nav";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className='App'>
      <h1>Beauty-Inventory-App</h1>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/products'>
            <ProductListContainer />
          </Route>
          <Route path='/products/new' component={ProductForm} />

          <Route exact path='/products/:id' component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;

/* <Route
            path='/products/:productId/categories/new'
            component={ProductListContainer}
          />
          <Route path='/categories' component={CategoryForm}>
            New Category
          </Route>

          <Route path='/categories/id'>Category List</Route> */
