import React from 'react';
import logo from '../../images/404.webp'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Error = () => {
    return (
        <div className='text-center mt-5'>
            <img src={logo} alt="" />
            <h1>Page Not Found</h1>
            <Link to='/'>
                <Button className='fw-semibold' variant='danger'>Go to Home</Button>
            </Link>

        </div>
    );
};

export default Error;