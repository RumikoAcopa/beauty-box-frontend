import React, { Component } from "react";
import ProductList from "../components/ProductList";

export default class ProductListContainer extends Component {
  state = {
    groups: [],
    loading: true
  };

  componentDidMount() {
    // we'd probably want to store the API_URL in an environment variable
    // so this would work in deployment as well but for now we'll hard code the hostname
    fetch("http://localhost:3000/products", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((productsJson) => {
        console.log("products", productsJson);
        this.setState({
          products: productsJson,
          loading: false
        });
      });
  }

  render() {
    return (
      <section className='max-w-6xl mx-auto mt-16'>
        {this.state.loading ? (
          "loading spinner"
        ) : (
          <ProductListContainer products={this.state.groups} />
        )}
      </section>
    );
  }
}
