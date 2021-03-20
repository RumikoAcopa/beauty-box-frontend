import React, { Component } from "react";

export default class ProductForm extends Component {
  state = {
    name: "",
    quantity: "",
    details: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        product: this.state
      })
    })
      .then((res) => res.json())
      .then((productJson) => {
        this.props.history.push("/products");
      });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='max-w-6xl mt-16 w-4/6 mx-auto shadow-lg'
      >
        <fieldset>
          <h1 className='w-full p-4 bg-blue-300 mt-4 text-center text-3xl font-semibold mb-2'>
            New Product
          </h1>

          <input
            type='text'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
            placeholder='name'
            className='w-full boder p-4 my-4'
          />

          <input
            type='integer'
            name='quantity'
            onChange={this.handleChange}
            value={this.state.quantity}
            placeholder='quantity'
            className='w-full boder p-4 my-4'
          />

          <input
            type='text'
            name='details'
            onChange={this.handleChange}
            value={this.state.details}
            placeholder='details'
            className='w-full boder p-4 my-4'
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

// export default class ProductForm extends Component {
//   state = {
//     name: ""
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//       const form = e.target;
//       const body = new FormData();
//       // we need to add the data from the form into this body (FormData) object using the append method
//       // When we do this we want to be thinking about how the rails API is expecting the event_params to look.
//       body.append("event[name]", form.name.value);
//       body.append("event[quantity]", form.quantity.value);
//       body.append("event[detail]", form.detail.value);

//     fetch("http://localhost:3001/products", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ product: this.state })
//     })
//       .then((res) => res.json())
//       .then((productJson) => {
//         this.props.history.push("/");
//       });
//   };
//   render() {
//     return (
//       <form
//         onSubmit={this.handleSubmit}
//         className='max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6'
//       >
//         <h1 className='text-center text-3xl font-semibold mb-2'>New Product</h1>
//         <fieldset>
//           <input
//             type='text'
//             name='name'
//             value={this.state.name}
//             placeholder='Name your product'
//             className='w-full border p-4 my-4'
//           />
//         </fieldset>
//         <button
//           className='w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200'
//           type='submit'
//         >
//           Add Product
//         </button>
//       </form>
//     );
//   }
// }
