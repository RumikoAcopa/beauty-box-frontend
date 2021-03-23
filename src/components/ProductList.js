import React from "react";
import ListedProducts from "../components/ListedProducts";

const ProductList = ({ products }) => {
  return (
    <>
      <h1 className='text-3xl'>Product List</h1>
      <ul>
        {products.map((product) => (
          <ListedProducts key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
