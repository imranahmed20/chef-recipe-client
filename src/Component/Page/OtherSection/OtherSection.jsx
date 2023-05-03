import React from 'react';
import image from '../../../images/banner-2.jpg'
import image2 from '../../../images/men-1.jpg'
import './otherSection.css'

const OtherSection = () => {
    return (
        <div className='chef-section container'>
            <div className='row row-cols-md-2 mt-5'>
                <div className='col mt-5'>
                    <h1 className='banner-title'>Easy Sushi</h1>
                    <p className='other-detail mt-4'>Sushi at its core is made with three simple ingredients: raw fish, a nori sheet, and sushi rice. But, as anyone that's frequented sushi restaurants will tell you, there are so many popular sushi rolls that come from those three ingredients</p>
                    <div className='d-flex  align-items-center mb-5 mt-4'>
                        <img className='rounded-circle' src={image2} alt="" />
                        <p className='ms-3 mt-3 fw-semibold'>Recipe by Jim Doe</p>
                    </div>
                    <button className='btn btn-danger fw-semibold'>Read More</button>
                </div>
                <div className='col'>
                    <img className='rounded  me-3' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OtherSection;
