import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Links extends Component {
  render() {
    return (
      <div className='Header-links'>
        <Navbar variant='dark' bg='dark' expand='lg'>
          <Navbar.Brand href='#home'>
            <i class='fas fa-laptop-code'></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#home'>
                <Link to='/' className='Link-one'>
                  HOME
                </Link>
              </Nav.Link>
              <NavDropdown title='DROPDOWN' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>
                  <Link to='/portfolio' className='Link-two'>
                    PORTFOLIO
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  <Link to='/jokes' className='Link-two'>
                    JOKES
                  </Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.1"><Link to="/music-master" className="Link-two">MUSIC MASTER</Link></NavDropdown.Item> */}
                <NavDropdown.Item href='#action/3.3'>
                  <Link to='/socialProfiles' className='Link-two'>
                    CONTACT
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Links;
