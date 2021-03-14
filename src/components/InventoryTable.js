import React from 'react';
import InventoryDetail from './InventoryDetail'
function InventoryTable(props) {

  const {products, fetchedInventory} = props.fetchedInventory

  return (

    <div className="InventoryTable">
      {products.items.map(product => {
        const {id} = product

        const relevantInventory =fetchedInventory.filter(inventory => inventory.product.id === product.id)

        const stockTotal = relevantInventory.reduce((accumulator, currentElement) => {
          return accumulator + currentElement.quantity
        }, 0)

        return (
          <div className="InventoryTable__ProductsContainer">
            <InventoryDetail 
            name={product.name} 
            total={stockTotal} 
            fetchedInventory={relevantInventory}/>
          </div>
        )
      })}      
    </div>
  )
}

export default InventoryTable