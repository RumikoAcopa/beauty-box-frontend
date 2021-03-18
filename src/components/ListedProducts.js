import React from "react";

const ListedProducts = ({ product }) => {
  return (
    <li className='' key={product.id}>
      {product.name}
    </li>
  );
};

export default ListedProducts;
