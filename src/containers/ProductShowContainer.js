import React, { Component } from 'react';

export default class ProductShowContainer extends Component {
  state = {
    product: {},
    category: [],
    loading: true
  };

  componentDidMount() {
    const productId = this.props.match.params.productId;
    fetch(`http://localhost:3001/products/${productId}`)
      .then((res) => res.json())
      .then((productJson) => {
        console.log(productJson);
      });
  }
  render() {

    return (
      <section className='Product_Show_Container max-w-6xl w-11/12 mx-auto mt-16'>
        <h1 className='Product_Show_H1 text-3xl font-bold text-center'>
          {this.state.group.name}
        </h1>
        <div className='Product_Show_Div grid grid-cols-3'>
          {this.state.events.map((event) => (
            <figure>
              
              <h2>{product.name}</h2>
              <p>{product.quantity}</p>
              <p>{product.details}</p>
              
            </figure>
          ))}
        </div>
      </section>
    );

  }
}