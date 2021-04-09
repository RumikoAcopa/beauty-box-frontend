import React from "react";
import ProductListItem from "./ProductListItem";


const ProductList = ({ products }) => {
  return (
    <>
      <h1 className='text-3xl mx-80'>Product List</h1>
      <ul>
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ul>
      
    </>
  );
};

export default ProductList;
