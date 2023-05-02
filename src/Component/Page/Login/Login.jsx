import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/Firebase';
import { FaGoogle, FaGithub } from 'react-icons/fa';


const auth = getAuth(app)
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const provider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser)
                navigate(from)
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                navigate(from)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <Container className='w-50 mx-auto mt-5 mb-3'>
            <h3 className='text-center mb-3 fw-bold'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='fw-semibold' variant="success" type="submit">
                    Login
                </Button>
                <p className='mt-3'>
                    Don't have an account <Link to='/register'>Register</Link>
                </p>
            </Form>
            <p className='fw-semibold text-center'>--------- Or Login With ----------</p>
            <button className='btn btn-danger fw-semibold  w-100' onClick={handleGoogleLogin}><FaGoogle></FaGoogle> Google Login</button>
            <br />
            <br />
            <button className='btn btn-danger fw-semibold  w-100' onClick={handleGithubLogin}><FaGithub></FaGithub> Github Login</button>
        </Container>
    );
};

export default Login;