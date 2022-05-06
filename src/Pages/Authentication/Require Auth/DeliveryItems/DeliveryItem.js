import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../../../Hooks/useItemDetail';

const DeliveryItem = () => {
    const {itemId} = useParams();
    const [item] = useItemDetail(itemId);

    return (
        <div className='text-center'>
        <h2>{item.name}</h2>
        <h4>Quantity: {item.quantity}</h4>
        <button className='btn btn-dark text-warning'>Delivery</button>
            
            
        </div>
    );
};

export default DeliveryItem;