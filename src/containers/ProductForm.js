import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../actions/products";
class ProductForm extends Component {
  state = {
    name: "",
    quantity: "",
    details: "",
    errors: {}
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props
      .dispatchCreateProduct(this.state)
      .then((productJson) => {
        this.props.history.push("/products");
      })
      .catch((errors) => {
        this.setState({
          errors
        });
      });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='max-w-6xl mt-16 w-4/6 mx-auto shadow-lg'
      >
        <fieldset>
          <p className='Error h-8 text-red-400'>{this.state.errors.name}</p>
          <h1 className='w-full p-4 bg-blue-300 mt-4 text-center text-3xl font-semibold mb-2'>
            Add A New Product
          </h1>

          <input
            type='text'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
            placeholder='name'
            className={`border-double border-2 border-pink-200 w-full p-4 mb-4 ${
              this.state.errors.name && "border-red-400"
            }`}
          />

          <input
            type='integer'
            name='quantity'
            onChange={this.handleChange}
            value={this.state.quantity}
            placeholder='quantity'
            className={`border-double border-2 border-pink-200 w-full p-4 mb-4 ${
              this.state.errors.name && "border-red-400"
            }`}
          />

          <input
            type='text'
            name='details'
            onChange={this.handleChange}
            value={this.state.details}
            placeholder='category'
            className={`border-double border-2 border-pink-200 w-full p-4 mb-4 ${
              this.state.errors.name && "border-red-400"
            }`}
          />
        </fieldset>
        <button
          className='w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200'
          type='submit'
        >
          {" "}
          Add Product
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateProduct: (formData) => dispatch(createProduct(formData))
  };
};

export default connect(null, mapDispatchToProps)(ProductForm);
