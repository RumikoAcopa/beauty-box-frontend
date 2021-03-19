// import React from "react";
// import {link} from "./react-router-dom";

// const ProductList = ({ products }) => {
//   return (
//     <>
//       <h1>ProductsList</h1>
//       <div>
        
//         {products.map((product) => (
//           <ProductList key={product.id} product={product.name} />
          
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductList;

import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ product }) => {
  return (
    <li className='' key={product.id}>
      <Link to={`/products/${product.id}`}>{product.name}</Link>
    </li>
  );
};

export default ProductList;

// import React from 'react';
// import ProductDetail from './ProductDetail'

// function ProductList(props) {

//   const { products, stockInventory } = props

//   state = {
//     show: false
//   }

//   // componentDidMount() {

//   // }

//     return (
//       <div className="ProductList">
//         {products.map(product => {
//           const { id } = product

//           const relevantInventory = stockInventory.filter(se => se.product.id === product.id)

//           const stockTotal = relevantInventory.reduce((accumulator, currentElement) => {
//             return accumulator + currentElement.quantity
//           }, 0)

//           return (
//             <div className="ProductList_ProductsContainer">
//               <ProductDetail
//                 name={product.name}
//                 total={stockTotal}
//                 stockInventory={relevantInventory}
//               />
//             </div>
//           )
//         })}
//       </div>
//     )

// }
// export default ProductList;
