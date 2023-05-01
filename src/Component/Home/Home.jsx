import React from 'react';
import Banner from '../Page/Banner/Banner';
import CardDetail from '../Page/CardDetail/CardDetail';


const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <CardDetail></CardDetail>
        </div>
    );
};

export default Home;