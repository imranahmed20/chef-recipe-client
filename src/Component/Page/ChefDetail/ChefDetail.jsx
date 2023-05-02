import React from 'react';
import { Button, Card, Toast } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetail = () => {
    const { id } = useParams()
    const details = useLoaderData()
    console.log(details)
    const { name, image, experience, numOfRecipes, likes, description, recipes } = details

    const handleFavorite = () => {
        toast('My Favorite food')

    }
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

            <div className='row  row-cols-md-3 row-cols-sm-1 mt-5 '>
                <div className='card col'>
                    <h3 className='text-center'>{recipes[0]?.title}</h3>
                    <img className='h-75 rounded' src={recipes[0]?.image} alt="" />
                    <p className='fw-semibold m-2'>Choking Rating:
                        {recipes[0]?.rating}</p>
                    <Button onClick={handleFavorite} className='fw-semibold' variant='danger'>Favorite</Button>
                </div>
                <div className='card col'>
                    <h3 className='text-center'>{recipes[1]?.title}</h3>
                    <img className='h-75 rounded' src={recipes[1]?.image} alt="" />
                    <p className='fw-semibold m-2'>Choking Rating: {recipes[1]?.rating}</p>
                    <Button onClick={handleFavorite} className='fw-semibold' variant='danger'>Favorite</Button>
                </div>
                <div className='card col'>
                    <h3 className='text-center'>{recipes[2]?.title}</h3>
                    <img className='h-75 rounded' src={recipes[2]?.image} alt="" />
                    <p className='fw-semibold m-2'>Choking Rating: {recipes[2]?.rating}</p>
                    <Button onClick={handleFavorite} className='fw-semibold' variant='danger'>Favorite</Button>
                    <ToastContainer></ToastContainer>
                </div>

            </div>

        </div>
    );
};

export default ChefDetail;