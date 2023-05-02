import React from 'react';
import image from '../../../images/banner-1.avif'
import './Banner.css'


const Banner = () => {
    return (
        <div className='row row-cols-md-2 mt-5'>
            <div className='col mt-3'>
                <h1 className='banner-title'>Parsley and Cheese with Roasted Garlic Tomato Cream Sauce</h1>
                <p className='banner-detail'>These small but sophisticated blender cakes are not only eye-catching, but full of bright flavour. The rosemary syrup glaze is a must to complete the flavour profile.A Chef or Cook is responsible for using their culinary expertise to create appetizing dishes for diners to enjoy. Their duties include overseeing kitchen staff, tasting dishes before going to customers and restocking food produce as needed.</p>
                <button className='btn btn-danger fw-semibold'>Read More</button>
            </div>
            <div className='col'>
                <img className='rounded mt-2' src={image} alt="" />
            </div>

        </div>
    );
};

export default Banner;