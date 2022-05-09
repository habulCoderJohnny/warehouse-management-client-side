import React, { Component } from "react";
import Slider from "react-slick";
import './carousel.css';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",

    };
    return (
      <div className="slide-container my-4">
        <h2 className="display-3 container">Best Deals</h2>
        <Slider {...settings}>
          <div>
           <img src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          </div>
          <div>
            <img src="https://www.bennetts.co.uk/-/media/bikesocial/2020-july-images/top-10-fastest-bikes/top-10-ten-fastest-bikes-2020-(11).ashx" alt="" />
          </div>
          <div>
          <img src="https://smartmotorcyclingguide.files.wordpress.com/2020/09/60f1c-m58a002040scs-min-1.jpg?w=685" alt="" />
          </div>
          <div>
          <img src="https://imgk.timesnownews.com/story/MV_Agusta_Dragster_800_SCS.png?tr=w-600,h-450,fo-auto" alt="" />
          </div>
          <div>
          <img src="https://www.theindianwire.com/wp-content/uploads/2020/08/2020-mv-agusta-brutale-800-scs-white-grey-990x557.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}