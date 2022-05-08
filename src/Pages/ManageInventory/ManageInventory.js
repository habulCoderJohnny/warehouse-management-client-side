import React from 'react';
import useProducts from '../../Hooks/useProducts';
import './ManageInventory.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const ManageInventory = () => {
    const [products] = useProducts();
    return (
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
        <button className='btn btn-warning mt-2'>Delete Item</button>
      </Tr>
     
))}
    </Tbody>
  </Table>
    );
}
export default ManageInventory;


