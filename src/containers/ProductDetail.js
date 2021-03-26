import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../actions/products";
import ProductDetailComponent from "../components/ProductDetailComponent";
import { Link } from "react-router-dom";

class ProductDetail extends React.Component {
  // state = {
  //   show: false
  // }
  componentDidMount() {
    const product = this.props.match.params.id;
    this.props.dispatchFetchProduct(product);
  }

  render() {
    if (!this.props.product) {
      return <div>Loading Product</div>;
    }//conditional if no product then render div loading product

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
  
  //let loadingState = state.products.loadingState;
  //let product = state.products.product;
  return {
    //product,
    //loadingState
    product: state.products.list.find(p => p.id === product),
    
  };
  
  //   loadingState
  // };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchProduct: (product) => dispatch(fetchProduct(product))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);



// class ProductShowContainer extends Component {
//   componentDidMount() {
//     const productId = this.props.match.params.productId;
//     this.props.dispatchFetchProduct(productId);
//   }

//   render() {
//     if (this.props.loadingState !== "successful") {
//       <div>Loading</div>;
//     }
//     return (
//       <section className='Product_Show_Container max-w-6xl w-11/12 mx-auto mt-16'>
//         <h1 className='Product_Show_H1 text-3xl font-bold text-center'>
//           {this.props.product.name}
//           {/* {this.props.product.quantity}
//           {this.props.product.details} */}
//         </h1>
//         <p className='my-2'>
//           <Link to={`/products/${this.props.product.id}/category/new`}>
//             Add a Category
//           </Link>
//         </p>
//         <div className='Product_Show_Div grid grid-cols-3'>
//           {this.props.categories.map((category) => (
//             <h2>{category.name}</h2>
//           ))}
//         </div>
//       </section>
//     );
//   }
// }

// const mapStateToProps = (state, { match }) => {
//   const productId = match.params.productId;
//   let loadingState = state.products.loadingState[productId] || "not_started";
//   let product = state.products.product;
//   return {
//     //product,
//     //loadingState
//     product: state.products.list.find((p) => p.id === productId),
//     categories: state.categories.list.filter(
//       (category) => category.product_id === productId
//     ),
//     loadingState
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatchFetchProduct: (productId) => dispatch(fetchProductId(productId))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProductShowContainer);
