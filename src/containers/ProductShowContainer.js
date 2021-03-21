import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProduct } from '../actions/products';


class ProductShowContainer extends Component {
  state = {
    product: {},
    category: [],
    loading: true
  };

  componentDidMount() {

    const productId = this.props.match.params.productId;
    this.props.dispatchFetchProduct(productId);


    fetch(`http://localhost:3001/products/${productId}`)
      .then((res) => res.json())
      .then(({ product, categories }) => {
        this.setState({
          product,
          categories,
          loading: false
        })
      });
  }

  render() {
    if (this.props.loadingState !== 'successful') { 
    return <div>Loading</div>
    }
      return (
        <section className='Product_Show_Container max-w-6xl w-11/12 mx-auto mt-16'>
          <h1 className='Product_Show_H1 text-3xl font-bold text-center'>
            {this.props.product.name}
          </h1>
          <p className='my-2'>
            <Link to={`/products/${this.props.product.id}/category/new`}>
              Add an Event
            </Link>
          </p>
          <div className='Product_Show_Div grid grid-cols-3'>
            {this.props.products.map((product) => (
              <figure>
                <h2>{product.name}</h2>
                <p>{product.quantity}</p>
                <p>{product.details}</p>
              </figure>
            ))}
          </div>
        </section>
      );

  }
}

const mapStateToProps = (state, { match }) => {
  const productId = match.params.productId
  let loadingState = state.categories.productsLoaded[productId] || "not_started"
  return {
    product: state.products.list.find(p => p.id == productId),
    categories: state.categories.list.filter(event => event.product_id == productId),
    loadingState 
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchProduct: (productId) => dispatch(fetchProduct(productId)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductShowContainer)