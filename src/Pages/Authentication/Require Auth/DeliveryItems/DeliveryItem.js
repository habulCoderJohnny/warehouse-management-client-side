import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../../../Hooks/useItemDetail';

const DeliveryItem = () => {
    const {itemId} = useParams();
    const [item] = useItemDetail(itemId);
    //   const data = item;
    // console.log(data);


    return (
        <div className='text-center'>
        <h5>Product Id: {itemId}</h5>
        <h2>name:{item.name}</h2>
        <h4>Quantity: {item.quantity}</h4>
        image, description, price, quantity, supplier name, sold,
        <button className='btn btn-dark text-warning'>Delivery</button>

        <h3>Restock the items</h3>
        <form>
            <input type="number" name="increase" placeholder='update Quantity'/>
        </form>
        <div className='w-25 mx-auto my-5'>
            <Link to="/manageInventory" className='btn btn-primary'>Manage Inventories</Link>
            </div>
            
            
        </div>
    );
};

export default DeliveryItem;