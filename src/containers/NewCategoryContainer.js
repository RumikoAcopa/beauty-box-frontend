import React, { Component } from "react";
import { connect } from "react-redux";

class NewCategoryContainer extends Component{
  
  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const body = new FormData();
    body.append("event[name]", form.name.value);
    body.append("event[product_id]", this.props.match.params.productId);

    fetch("http://localhost:3001/categories", {
      method: "post",
      body,
    })
      .then((res) => res.json())
      .then((eventJson) => {
        this.props.history.push(`products/${this.props.match.params.productId}`)
      });
  };

  render() {
    return (

      <form
        className="NewCategory_Form maxw-4xl w-11/12 mx-auto mt-16 shadow-lg px-8 py-6"
        onSubmit={this.handleSubmit}
      >
        
      </form>
    )
  }

}

export default connect(null, mapDispatchToProps)(NewCategoryContainer);