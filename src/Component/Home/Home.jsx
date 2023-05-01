import React from 'react';
import Banner from '../Page/Banner/Banner';
import CardDetail from '../Page/CardDetail/CardDetail';
import { useLoaderData } from 'react-router-dom';
import Category from '../Page/Category/Category';


const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div className='container'>
            <Banner></Banner>
            <CardDetail></CardDetail>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    categories.map(chef => <Category key={chef.id} chef={chef}></Category>)
                }
            </div>
        </div>
    );
};

export default Home;