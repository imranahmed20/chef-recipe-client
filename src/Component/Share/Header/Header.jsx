import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className=''>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand className='fw-bold fw-1 ' href="#">Chef Recipe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" className='fw-semibold'>Home</Nav.Link>
                            <Nav.Link href="/blog" className='fw-semibold'>Blog</Nav.Link>
                        </Nav>
                        <Form className="d-flex align-items-center">

                            {user ?
                                <button type="button" className="btn " data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title={user?.email}>
                                    <img style={{ width: '50px' }} className='rounded-circle me-3' src={user?.photoURL} alt="" />
                                </button>
                                :
                                <Nav.Link href="#action2"><FaUserCircle className='me-3  mt-1' style={{ fontSize: '2rem' }}></FaUserCircle></Nav.Link>
                            }

                            {user ?
                                <Button className='fw-semibold' onClick={handleLogOut} variant="success">logOut</Button> :
                                <Button variant="success">
                                    <Link className='text-white text-decoration-none fw-semibold' to='/login'>Login</Link>
                                </Button>
                            }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;