import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/banner/slider-1.jpeg';
import banner2 from '../../../image/banner/slider-2.jpeg';
import banner3 from '../../../image/banner/slider-3.jpeg';



const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>We will fix it
                        Put your trust in us
                        Love what you get</h3>
                    <p>Looking for the best car repair service near you? Sheba. Geniuncarservice.com  has trusted & skilled car mechanics in Bangladesh. Satisfaction guaranteed. Book now.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
               
                <Carousel.Caption>
                    <h3>Keep coming back
                        We care for your car
                        Your concern is ours too</h3>
                    <p>Looking for the best car repair service near you? Sheba. Geniuncarservice.com  has trusted & skilled car mechanics in Bangladesh. Satisfaction guaranteed. Book now.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Disappointing is not our job
                        Fixing is all we know</h3>
                    <p>
                        Looking for the best car repair service near you? Sheba.
                        Geniun car service.com has trusted & skilled car mechanics in Bangladesh. Satisfaction guaranteed. Book now.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;