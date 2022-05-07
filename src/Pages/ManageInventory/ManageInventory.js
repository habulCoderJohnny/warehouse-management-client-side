import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const ManageInventory = () => {
    const [products] = useProducts();
    return (
        <div className='container pb-4'>
        <h1 className='text-danger'>Manage Inventories</h1>
        <Link to="/AddItem" className='btn btn-dark text-warning'>Add item to Inventory</Link>
      <div> 
         {
             products.map(product => 
             <div className='text-center' key={product._id}> 
             <h5>Name: {product.name}</h5> <h5>Price: <span className='text-warning'>${product.price}</span></h5><h5 className='text-danger'>Quantity: {product.quantity}</h5> <h5>Supplier: {product.supplierName}</h5>
             <button className='btn btn-warning mb-4'>Delete Item</button> <hr/>
             </div> 
             )  
         }
     </div>

        </div>
    );
};

export default ManageInventory;
