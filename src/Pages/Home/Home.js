import React from 'react';
import InventoryItem from './Inventory Items/InventoryItems';
import Footer from '../Footer/Footer';
import AutoPlayCarousel from './my Section/AutoPlayCarousel';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItem></InventoryItem>
            <AutoPlayCarousel></AutoPlayCarousel>
      
            <Footer></Footer>

        </div>
    );
};

export default Home;