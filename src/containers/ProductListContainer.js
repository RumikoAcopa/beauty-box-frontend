import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';
import ProductList from "../components/ProductList";

class ProductListContainer extends Component {
  

  componentDidMount() {
    this.props.dispatchFetchProducts();
  }


  render() {
    if (this.props.loadingState ==='notStarted') {
      return null;
    }
    return (
      <section className='max-w-6xl   mt-16'>
        {this.props.loadingState ==='inProgress' ? (
          "loading spinner"
        ) : (
          <ProductList products={this.props.products} />
        )}
      </section>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    products: state.products.list,
    loadingState: state.products.loadingState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
