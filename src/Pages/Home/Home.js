import React from 'react';
import InventoryItem from './Inventory Items/InventoryItems';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <h1>Hello from my Universe Client side!</h1>
            <InventoryItem></InventoryItem>
            <Footer></Footer>

        </div>
    );
};

export default Home;