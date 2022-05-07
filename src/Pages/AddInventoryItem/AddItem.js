import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddItem = () => {

    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/bikes`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })  
        toast('Added your items!!');
        navigate('/manage')
    

    };
    return (
        <div className='w-50 mx-auto my-5'>
        <h2> Add a new item!</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column column-gap-4">
            <input {...register("name", { required: true, maxLength: 20 })} className='mb-2' placeholder='Item Name' />
            <input type="number" {...register("price", { min: 50, max: 100000 })} className='mb-2' placeholder='Price (min:50)' />
            <input type="number" {...register("quantity")} className='mb-2' placeholder='Quantity' />
            <input {...register("supplierName")} className='mb-2' placeholder='Supplier Name' />
            
            <input type="text" {...register("img")} className='mb-2' placeholder='Photo url' />
            <input className='btn btn-warning mb-2' placeholder='' type="submit" value="Add to inventory"/>
        </form> 
    </div>
    );
};

export default AddItem;