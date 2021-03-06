import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import InventoryItem from './InventoryItem';
import './InventoryItems.css';

const InventoryItems = () => {
    const [products] =useProducts();
    return (
        <div className='container'>
               <h1 className='text-danger display-3'>Popular  
               <span className='text-dark'> Bikes</span></h1>
             <div className='row'> 
                {
                    products.slice(0, 6).map(product => <InventoryItem key={product._id} product={product}></InventoryItem>)
                }
            </div> 

            <div className='w-25 mx-auto my-5'>
            <Link to="/manageInventory" className='btn btn-primary'>Manage Inventories</Link>
            </div>

        </div>
    );
};

export default InventoryItems;