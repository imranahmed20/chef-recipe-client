import React from 'react';
import './Footer.css'
import { FaGoogle, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-dark text-white p-5 mb-0'>
            <div className='row row-cols-1 row-cols-md-3'>
                <div className="col text-center">
                    <h3 className='fw-bold'>Opening Times</h3>
                    <div className='mt-4'>
                        <p className='footer-detail'>Monday – Thursday: 08AM – 10PM</p>
                        <p className='footer-detail'>Friday – Saturday: 10AM–11:30PM</p>
                        <p className='footer-detail'>Sunday: Closed</p>
                        <p className='footer-detail'>Booking TIme: 24/7 Hours</p>
                    </div>
                </div>
                <div className="col text-center">
                    <h3 className='fw-bold mb-4'>Chef Recipe</h3>
                    <p className='footer-detail'>Open the Recipe “ktexperts-recipe. rb” and write script to create file. Verify syntax of recipe. Execute the recipe Locally/Call chef-client.</p>
                    <div className='mb-3'>
                        <FaFacebook className='me-3' style={{ fontSize: '2rem' }}></FaFacebook>
                        <FaGoogle className='me-3' style={{ fontSize: '2rem' }}></FaGoogle>
                        <FaTwitter style={{ fontSize: '2rem' }}></FaTwitter>

                    </div>
                </div>
                <div className="col text-center">
                    <h3 className='fw-bold mb-4'>Contact Info</h3>
                    <p className='footer-detail'>Address: New Hyde Park, NY 11040</p>
                    <p className='footer-detail'>Email: ratul@info.com</p>
                    <p className='footer-detail'>Call: (+81)-214-66-612027</p>
                </div>
            </div>
            <p className='footer-detail text-center mt-5 fw-semibold'><small>Copy right  @2021</small></p>
        </div>
    );
};

export default Footer;