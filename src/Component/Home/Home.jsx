import React from 'react';
import Banner from '../Page/Banner/Banner';
import CardDetail from '../Page/CardDetail/CardDetail';
import { useLoaderData } from 'react-router-dom';
import Category from '../Page/Category/Category';
import Food from '../Page/Food/Food';


const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div className='container'>
            <Banner></Banner>
            <CardDetail></CardDetail>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-3">
                {
                    categories.map(chef => <Category key={chef.id} chef={chef}></Category>)
                }
            </div>

            <div className="row row-cols-md-3 row-cols-sm-1 g-4 mb-3">
                {
                    categories.map(food => <Food key={food.id} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Home;