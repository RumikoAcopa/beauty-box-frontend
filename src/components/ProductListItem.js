import React from "react";
import {Link} from "react-router-dom"

const ProductListItem = ({ product }) => {
  return (
    <li
      className='Product_List_Item border-double border-4 border-pink-200 max-w-6xl w-2/4 my-8 shadow-md px-4 py-6 mx-80'
      key={product.id}
    >
      <Link to={`/products/${product.id}`}>
        <strong>Name:</strong> {product.name}{" "}
      </Link>

    </li>
  );
};

export default ProductListItem;


    
