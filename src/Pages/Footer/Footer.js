import React from 'react';
import logo from '../../logo/logo.png';
import img from '../../logo/howtopay.png';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div id="footer">
            <p className="left">
                <Navbar.Brand as={Link} to="/home">
                    <img height={25} src={logo} alt="" />
                </Navbar.Brand> <br />
                <LocationMarkerIcon className="icon" />Level-4, 34, Awal Centre, Banani, Dhaka <br />
                <MailIcon className="icon" /> Official: business@MotorMania.com <br />
                <PhoneIcon className="icon" /> Helpline : 01322810873 , 01322810867<br />
                (Available : Sat - Thu, 10:00 AM to 7:00 PM) <br />
                <a href="https://play.google.com/store/search?q=motormania&c=apps" target="_blank" >
                    <img height={50} src=" https://web.programming-hero.com/static/media/app-download.439edada.png" alt="" /></a>
            </p>
            {/* LEFT SIDE END  */}
            <p className="right"><img height={130} weight={20} src={img} alt="" srcset="" /></p>
            {/* RIGHT SIDE END  */}
            <p className="centered">
                <Link to="/about">About Us</Link> <br />
                <Link to="#">Success</Link> <br />
                <Link to="#">Our business</Link> <br />
                <Link to="#">Mission 2022</Link> <br />
                <Link to="#">Refund policy</Link> <br />
                <Link to="#">Privacy Policy</Link> <br />
                <Link to="#">Terms and Conditions</Link> <br /> 
            </p>
              
            <p className='h6 w-25 mx-auto mt-5 copyright'>
            <FontAwesomeIcon icon={faCopyright} /> Copyright <span className='h5'>{year}</span> | motorMania.com
            </p>
        </div>
    );
};

export default Footer;

<FontAwesomeIcon icon="" />


