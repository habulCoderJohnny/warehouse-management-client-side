import React from 'react';
import { useNavigate } from 'react-router-dom';



const InventoryItem = ({ product }) => {
    const { _id, name, price, quantity, supplierName, description, img } = product;
    const navigate = useNavigate();
    const handleNavigate = id =>{
        navigate(`/bikes/${id}`);

    }
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4'>

            <div className="card" style={{ width: '23rem', height:'50rem'} }>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5>Price: <span className='text-danger'>${price}</span></h5>
                    <h5>Quantity: {quantity}</h5>
                    <h5>Supplier: {supplierName}</h5>
                    <p className="text-justify">{description}</p>
                    <button onClick={()=>handleNavigate(_id)} className='btn btn-danger'>Stock Update</button>
                </div>
            </div>

        </div>
    );
};

export default InventoryItem;