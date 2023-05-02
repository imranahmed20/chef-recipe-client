import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(email, photo, password)

        createUser(email, password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Container className='w-50 mx-auto mt-5'>
            <h3 className='text-center mb-3 fw-bold text-primary'>Create an account</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='fw-semibold' variant="success" type="submit">
                    Register
                </Button>
                <p className='mt-3'>
                    Already have an account  <Link to='/login'>Login</Link>
                </p>
            </Form>
        </Container>
    );
};

export default Register;