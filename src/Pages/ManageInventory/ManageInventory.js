import React from 'react';
import useProducts from '../../Hooks/useProducts';
import './ManageInventory.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import axiosPrivate from '../../api/axiosPrivate';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';


const ManageInventory = () => {
    const [products, setProducts] = useProducts();
    const [user] = useAuthState(auth);

    const handleDeleteItem = async (itemId, email) => {
      const itemDelete = window.confirm("are you sure");
      if (itemDelete && email) {
        const url = `https://rocky-crag-07319.herokuapp.com/bikes?id=${itemId}&email=${user?.email}`;
        try {
          const { data } = await axiosPrivate.delete(url);
          if (data.deletedCount) {
            toast.success("item deleted", {
              id: "success",
            });
            const remember = products.filter((product) => product._id !== itemId);
            setProducts(remember);
          }
        } 
       
      catch (error){
        if(error.response.status === 403 || error.response.status === 401){
          toast.error('Unauthorize/please login',{
            id: 'error'
          })
          signOut(auth)
          // navigate('/login')
        }
      }
    }
      
      else if (!itemDelete) {
        toast.error("cancel", {
          id: "error",
          duration: 2000,
        });
      } else if (!email) {
        toast.error("This item not delete", {
          id: "error",
          duration: 2000,
        });
      }
    };
   


    return (

      <div>
        <Table className="text-center">
        <Thead>
      <Tr>
      <Th>Product Id</Th>
    <Th>Brand</Th>
    <Th>Price</Th>
    <Th>Quantity</Th>
    <Th>Item Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
        
{products.map(product => (
      <Tr className="">
        <Td>{product._id}</Td>
        <Td className='text-warning'>{product.name}</Td>
        <Td className='text-primary'>$ {product.price}</Td>
        <Td className='h3'>{product.quantity}</Td>
        <button onClick={() =>
                              handleDeleteItem(product?._id, product?.email)
                            } className='btn btn-warning mt-2'>Delete Item</button>
      </Tr>
     
))}
    </Tbody>
  </Table>

  <div className='text-center my-5'>
            <Link to="/AddItem" className='btn btn-primary'>Add item</Link>
            </div>
  </div>

  
    );
}
export default ManageInventory;


