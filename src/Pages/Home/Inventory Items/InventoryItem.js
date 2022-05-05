import React from 'react';



const InventoryItem = ({ product }) => {
    const { name, price, quantity, supplierName, description, img } = product;
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4'>

            <div className="card" style={{ width: '23rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5>Price: <span className='text-danger'>${price}</span></h5>
                    <h5>Quantity: {quantity}</h5>
                    <h5>Supplier: {supplierName}</h5>
                    <p className="card-text">{description}</p>
                    <button className='btn btn-danger'>Stock Update</button>
                </div>
            </div>

        </div>
    );
};

export default InventoryItem;

