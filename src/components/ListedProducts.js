import React from "react";
import { Link } from "react-router-dom";

const ListedProducts = ({ product }) => {
  return (
    <li className='Listed_Products' key={product.id}>
       <Link to={`/products/${product.id}`}>name {product.name} </Link>
    </li>
  );
};

export default ListedProducts;


    
