import React from 'react';


class ProductDetail extends React.Component {

  state = {
    show: false
  }


  render() {

    const {name, total, stockInventory} = this.props
    const {show} = this.state
    
    return (
    <div className="ProductDetail" onClick={() => this.setState({show: !show})}>
      
      <h2>Products: {name} | Total: {total}</h2>
        {show && 
        <div>
        {stockInventory.map(event => (
        <div className="ProductList__Card">
          <p>Id: {event.id}</p>
          <p>Type: {event.type}</p>
          <p>Quantity: {event.quantity}</p>
          <p>Product Name: {event.product.name}</p>
        </div>
        ))}
        </div>
      }
        
    </div>
    )
  }
}
export default ProductDetail;