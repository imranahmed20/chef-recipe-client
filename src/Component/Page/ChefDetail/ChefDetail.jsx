import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ChefDetail = () => {
    const { id } = useParams()
    const details = useLoaderData()
    console.log(details)
    const { name, image, experience, numOfRecipes, likes, description } = details
    return (
        <div className='p-2 container mt-5'>
            <div className='row row-cols-md-2'>
                <div className='col mt-5'>
                    <h1>{name}</h1>
                    <p className='category-detail mt-3'>{description}</p>
                    <p className='mt-3 fw-semibold mb-2'>Experience: {experience}</p>
                    <p className='fw-semibold mb-2'>Likes: {likes}</p>
                    <p className='fw-semibold mb-2'>Recipes: {numOfRecipes}</p>
                </div>
                <div className='col'>
                    <img src={image} alt="" />
                </div>
            </div>


        </div>
    );
};

export default ChefDetail;