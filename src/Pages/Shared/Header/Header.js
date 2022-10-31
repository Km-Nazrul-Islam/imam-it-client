import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

        const handleLogOut = () => {
            logOut()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
        }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand><Link className='text-white text-decoration-none' to='/'>Imam IT Foundation</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-white text-decoration-none ms-2' to='/home'>Home</Link>
                        <Link className='text-white text-decoration-none ms-4' to='/courses'>Courses</Link>
                        <Link className='text-white text-decoration-none ms-4' to='/faq'>FAQ</Link>
                        <Link className='text-white text-decoration-none ms-4' to='/blog'>Blog</Link>
                    </Nav>
                    <div>
                        {
                            user?.uid ?
                                <div>
                                    
                                    <button onClick={handleLogOut} className='bg-primary border border-0 text-white fw-bolder me-2'>Log Out</button>
                                    <span className='text-white fw-semi-bold me-2'>{user?.displayName}</span>
                                </div>
                            :
                            <div>
                                    <Link className='text-white me-2 text-decoration-none fw-bold' to="/login">Login</Link>
                                    <Link className='text-white ms-2 text-decoration-none fw-bold me-2' to="/signup">Sign Up</Link>
                            </div>
                        }
                    </div>

                    <div>
                        {user?.photoURL?
                            <Image style={{ height: '25px' }} roundedCircle src={user?.photoURL} ></Image> 
                        :
                        <FaUser></FaUser>  
                    }
                        
                    </div>
                    
                </Navbar.Collapse>
            </Container>
            <div className='d-lg-none'>
                <LeftSideNav></LeftSideNav>
            </div>
        </Navbar>
    );
};

export default Header;