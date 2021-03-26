import React from "react";

const ProductDetailComponent = ({ product }) => {
  return (
    <div className='ProductDetail max-w-6xl w-3/4 mx-auto'>
      <h1 className='text-3xl'> Product Details</h1>
      <ul className=' border-double border-4 border-light-blue-500 mt-4 shadow-lg px-4 py-6 mb-4 w-1/2'>
        Name: {product.name} <br />
        Quantity: {product.quantity} <br />
        Category: {product.details} <br />
      </ul>
    </div>
  );
}

export default ProductDetailComponent;