import React from 'react';
import './Category.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Category = ({ chef }) => {
    const { id, name, image, experience, numOfRecipes, likes } = chef;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top h-75" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className='category-detail'>Experience: {experience}</p>
                    <p className='category-detail'>Likes: {likes}</p>
                    <p className='category-detail'>Recipes: {numOfRecipes}</p>
                </div>
                <Link to={`/category/${id}`} className='text-white text-decoration-none '>
                    <Button className='fw-semibold w-100' variant='danger'> View Recipe</Button>
                </Link>
            </div>
        </div>
    );
};

export default Category;