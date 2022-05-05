import React from 'react';
import useProducts from '../../Hooks/useProducts';

const ManageInventory = () => {
    const [products] = useProducts();
    return (
        <div className='container pb-4'>
        <h1 className='text-danger'>Manage Inventories</h1>
      <div> 
         {
             products.map(product => <div key={product._id}> <h5>{product.name}</h5> <h5>Price: <span className='text-danger'>${product.price}</span></h5><h5 className='text-danger'>Quantity: {product.quantity}</h5><button className='btn btn-warning mb-4'>Delete Item</button></div> 
             )  
         }
     </div>

     
        </div>
    );
};

export default ManageInventory;
