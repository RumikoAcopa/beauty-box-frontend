import React, { Component } from 'react'

function ProductForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/products", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        product: {
          name: document.getElementById("name").value,
          quantity: document.getElementById("quantity").value,
          details: document.getElementById("details").value,
          
        }
      })
    }).then((response) => {
      if (response.ok) {
        alert("You have submitted the form.");
        document.getElementById("new_product").reset();
      } else {
        alert("form submission failed ");
        return response.text().then((error) => Promise.reject(error));
      }
    });
  };
  return (
    <div className='Product_Form'>
      <h1>Add a new product</h1>
      <form onSubmit={handleSubmit} id='new_product'>
        <fieldset className='Product_Form_Name'>
          <label htmlFor='name' className='block uppercase'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='w-full border-2 p-4 my-4'
          />
        </fieldset>
        <fieldset className='Product_Form_Quantity'>
          <label htmlFor='quantity' className='block uppercase'>
            Quantity
          </label>
          <textarea
            className='w-full border-2 p-4 my-4'
            name='quantity'
            id='quantity'
          ></textarea>
        </fieldset>
        <fieldset className='Product_Form_Details'>
          <label htmlFor='start_time' className='block uppercase'>
            Category
          </label>
          <input
            type='details' 
            name='details'
            id='details'
            className='w-full border-2 p-4 my-4'
          />
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default ProductForm;









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

