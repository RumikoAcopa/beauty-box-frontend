import React from 'react';


class InventoryDetail extends React.Component {

  state = {
    show: false
  }

  render() {

    const {name, total, fetchedInventory} = this.props
    const {show} = this.state
    
    return (
    <div className="InventoryDetail" onClick={() => this.setState({show: !show})}>
      <h2>Products: {name} | Total: {total}</h2>
        {show && 
        <div>
        {fetchedInventory.map(event => (
        <div className="InventoryTable__Card">
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



export default InventoryDetail