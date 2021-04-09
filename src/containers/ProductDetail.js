import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../actions/products";
import ProductDetailComponent from "../components/ProductDetailComponent";
import { Link } from "react-router-dom";

class ProductDetail extends React.Component {

  componentDidMount() {
    const product = this.props.match.params.id;
    this.props.dispatchFetchProduct(product);
  }

  
  render() {

    return (
      <>
        <div>
          <ProductDetailComponent product={this.props.product} />
        </div>
        <button className='inline-block border border-blue-500 rounded py-2 px-3 bg-blue-500 text-white mx-44'>
          <Link to={`/products`}>
            BACK 
          </Link>
        </button>
      </>
      
    );
  }
}


const mapStateToProps = (state, { match }) => {
  
  const product = parseInt(match.params.id);
  
  return {
    
    product: state.products.list.find(p => p.id === product),
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchProduct: (product) => dispatch(fetchProduct(product))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);



