import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductId } from "../actions/products";



class ProductShowContainer extends Component {
  

  componentDidMount() {

    const productId = this.props.match.params.productId;
    this.props.dispatchFetchProduct(productId);
  }
    
  render() {
    if (this.props.loadingState !== 'successful') {
      <div>Loading</div>
    }
    return (
      
      <section className='Product_Show_Container max-w-6xl w-11/12 mx-auto mt-16'>
        <h1 className='Product_Show_H1 text-3xl font-bold text-center'>
          {this.props.product.name}
          {this.props.product.quantity}
          {this.props.product.details}
        </h1>
        <p className='my-2'>
          <Link to={`/products/${this.props.product.id}/category/new`}>
            Add a Category
            </Link>
        </p>
        <div className='Product_Show_Div grid grid-cols-3'>
          {this.props.categories.map(category => <h2>{category.name}</h2>)}
                
            
            
        </div>
      </section>
    );
  }  
  
}

const mapStateToProps = (state, { match }) => {
  const productId = match.params.productId
  let loadingState = state.categories.productsLoaded[productId] || "not_started"
  return {
    product: state.products.list.find(p => p.id === productId),
    categories: state.categories.list.filter(category => category.product_id === productId),
    loadingState 
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchProduct: (productId) => dispatch(fetchProductId(productId)),
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductShowContainer)