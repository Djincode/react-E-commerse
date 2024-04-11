import React from 'react';
import {Navbar, Nav , Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar  variant='dark' expand='lg' collapseOnSelect>
            <Container>
               <LinkContainer to='/'>
               <Navbar.Brand >
                  DjinStore
                </Navbar.Brand>
               </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                    <LinkContainer to='/cart'>

                    <Nav.Link><FaShoppingCart className='me-2 text-light'/><span className='text-light'>
                        Cart</span>
                        
                      </Nav.Link>
                    </LinkContainer>
                       <LinkContainer to='/login'>
                       <Nav.Link><FaUser className='me-2 text-light'/>
                       <span className='text-light'>Sign In
                       </span>
                       </Nav.Link>

                       </LinkContainer>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header