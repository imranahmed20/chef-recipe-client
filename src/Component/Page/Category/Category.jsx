import React from 'react';
import './Category.css'

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
                <button className='btn btn-danger mb-0 fw-semibold'>View Recipe</button>
            </div>
        </div>
    );
};

export default Category;