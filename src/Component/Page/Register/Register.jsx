import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile, getAuth } from 'firebase/auth';
import app from '../../../firebase/Firebase';

const auth = getAuth(app)
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState('')
    const from = location.state?.from?.pathname || '/'
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError("Password must be 6 character long")
        }

        console.log(name, email, photo, password)
        createUser(email, password)

            .then(result => {
                updateProfile(result.user, { displayName: name, photoURL: photo })
                const user = result.user;

                console.log(user)
                form.reset()
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)


            })



    }
    return (
        <Container className='w-50 mx-auto mt-5'>
            <h3 className='text-center mb-3 fw-bold text-primary'>Create an account</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='fw-semibold' variant="success" type="submit">
                    Register
                </Button>
                <p className='text-danger'>{error}</p>
                <p className='mt-3'>
                    Already have an account  <Link to='/login'>Login</Link>
                </p>
            </Form>
        </Container>
    );
};

export default Register;