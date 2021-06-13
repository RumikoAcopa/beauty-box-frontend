import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import ProductForm from "./containers/ProductForm.js";
import ProductIndexContainer from "./containers/ProductIndexContainer.js";
import ProductDetail from "./containers/ProductDetail.js";
import Nav from "./components/Nav";
import Footer from "./components/Footer.js";
import Button from "./components/Button.js";



function App() {
  return (
    <div className='App'>
      <h1>Beauty-Inventory-App</h1>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/products'>
            <ProductIndexContainer />
            <Button />
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


