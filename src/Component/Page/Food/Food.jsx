import React from 'react';
import image1 from '../../../images/food-5.avif'
import image2 from '../../../images/food-6.avif'
import image3 from '../../../images/food-7.avif'

const Food = () => {

    return (
        <div className='chef-section'>
            <h1 className='text-center fw-bold mb-5'>Our Food Galary</h1>
            <div className='row row-cols-md-3 row-cols-sm-1 g-4 mb-3'>
                <div className='card col'>
                    <img className='h-100 rounded' src={image1} alt="" />
                    <h4 className='text-center'>Chocolate Cake</h4>

                </div>
                <div className='card col'>
                    <img className='h-100 rounded' src={image2} alt="" />
                    <h4 className='text-center'>Barger</h4>
                </div>
                <div className='card col'>
                    <img className='h-100 rounded' src={image3} alt="" />
                    <h4 className='text-center'>Pesto Pasta</h4>
                </div>
            </div>
        </div>
    );
};

export default Food;