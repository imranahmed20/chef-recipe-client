import React from 'react';
import { Button, Card, Toast } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './chefDetail.css'
import { FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';


const ChefDetail = () => {
    const { id } = useParams()
    const details = useLoaderData()
    // const isAnonymous = true;
    const { name, image, experience, numOfRecipes, likes, description, recipes } = details

    const handleFavorite = (event) => {
        event.currentTarget.disabled = true;
        toast('My Favorite food')

    }
    return (
        <div className='p-2 container mt-5'>
            <div className='row row-cols-md-2'>
                <div className='col mt-5'>
                    <h1>{name}</h1>
                    <p className='chef-details mt-3'>{description}</p>
                    <p className='mt-3 fw-semibold mb-2'>Experience: {experience}</p>
                    <p className='fw-semibold mb-2'>Likes: {likes}</p>
                    <p className='fw-semibold mb-2'>Recipes: {numOfRecipes}</p>
                </div>
                <div className='col'>
                    <img className='rounded' src={image} alt="" />
                </div>

            </div>

            <div className='row  row-cols-md-3 row-cols-sm-1 mt-5 '>
                <div className='card col'>
                    <h3 className='mt-3'> Recipe: {recipes[0]?.title}</h3>
                    <h4>Ingredients: </h4>
                    <ol>
                        <li className='fw-semibold'>{recipes[0]?.ingredients[0]}</li>
                        <li className='fw-semibold'>{recipes[0]?.ingredients[1]}</li>
                        <li className='fw-semibold'>{recipes[0]?.ingredients[2]}</li>
                        <li className='fw-semibold'>{recipes[0]?.ingredients[3]}</li>
                        <li className='fw-semibold'> {recipes[0]?.ingredients[4]}</li>
                    </ol>
                    <p className='fw-bold'>Cooking method:<span className='fw-semibold'>{recipes[0]?.instructions}</span></p>
                    <h5 className='fw-semibold m-2 mb-3'>Choking Rating: <FaStar className='text-warning'></FaStar ><FaStar className='text-warning'></FaStar > <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar><FaStarHalfAlt className='text-warning'></FaStarHalfAlt>   {recipes[0]?.rating}</h5>
                    <Button onClick={handleFavorite} className='fw-semibold' variant='danger'>Favorite</Button>
                </div>
                <div className='card col'>
                    <h3 className='mt-3'> Recipe: {recipes[1]?.title}</h3>
                    <h4>Ingredients: </h4>
                    <ol>
                        <li className='fw-semibold'>{recipes[1]?.ingredients[0]}</li>
                        <li className='fw-semibold'>{recipes[1]?.ingredients[1]}</li>
                        <li className='fw-semibold'>{recipes[1]?.ingredients[2]}</li>
                        <li className='fw-semibold'>{recipes[1]?.ingredients[3]}</li>
                        <li className='fw-semibold'>{recipes[1]?.ingredients[4]}</li>
                    </ol>
                    <p className='fw-bold'>Cooking method: <span className='fw-semibold'>{recipes[1]?.instructions}</span></p>
                    <h5 className='fw-semibold m-2 mb-3'>Choking Rating:<FaStar className='text-warning'></FaStar ><FaStar className='text-warning'></FaStar > <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar><FaStarHalfAlt className='text-warning'></FaStarHalfAlt> {recipes[1]?.rating}</h5>
                    <Button onClick={handleFavorite} className='fw-semibold' variant='danger'>Favorite</Button>
                </div>
                <div className='card col'>
                    <h3 className='mt-3'> Recipe: {recipes[2]?.title}</h3>
                    <h4>Ingredients: </h4>
                    <ol>
                        <li className='fw-semibold'>{recipes[2]?.ingredients[0]}</li>
                        <li className='fw-semibold'>{recipes[2]?.ingredients[1]}</li>
                        <li className='fw-semibold'>{recipes[2]?.ingredients[2]}</li>
                        <li className='fw-semibold'>{recipes[2]?.ingredients[3]}</li>
                        <li className='fw-semibold'>{recipes[2]?.ingredients[4]}</li>
                    </ol>
                    <p className='fw-bold'>Cooking method: <span className='fw-semibold'>{recipes[2]?.instructions}</span></p>
                    <h5 className='fw-semibold m-2 mb-3'>Choking Rating:<FaStar className='text-warning'></FaStar ><FaStar className='text-warning'></FaStar > <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar><FaStarHalfAlt className='text-warning'></FaStarHalfAlt> {recipes[2]?.rating}</h5>
                    <Button onClick={handleFavorite} className='fw-semibold' variant='danger'>Favorite</Button>
                    <ToastContainer></ToastContainer>
                </div>

            </div>

        </div>
    );
};

export default ChefDetail;