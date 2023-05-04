import React from 'react';
import image from '../../../images/banner-1.avif'
import './Banner.css'


const Banner = () => {
    return (
        <div className='row mt-5'>
            <div className='col-12 col-md-6 mt-3'>
                <h1 className='banner-title'>Parsley and Cheese with Roasted Garlic Tomato Cream Sauce</h1>
                <p className='banner-detail'>A traditional marinara has tomatoes, garlic, and basil. Tomato sauce has more ingredients including onions, carrots, celery, and additional seasonings. Any recipe that calls for marinara can also use tomato sauce, although it will alter the flavor slightly...</p>
                <button className='btn btn-danger fw-semibold'>Read More</button>
            </div>
            <div className='col-12 col-md-6 w-md-100'>
                <img className='rounded mt-2 img-fluid w-100' src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;