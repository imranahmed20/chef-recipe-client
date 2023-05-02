import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ChefDetail = () => {
    const { id } = useParams()
    const details = useLoaderData()
    console.log(details)
    const { name, image, experience, numOfRecipes, likes } = details
    return (
        <div className='p-2 container mt-5'>
            <Card>
                <Card.Img variant="top" className='img-fluid w-50 mx-auto rounded' src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Link> <Button variant="danger">Favorite</Button></Link>
                    <Link to='/'> <Button variant="danger">Go to home</Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default ChefDetail;