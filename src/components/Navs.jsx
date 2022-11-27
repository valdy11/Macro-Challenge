import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ABOUT, COMMUNTIY, HOME, LOGIN } from '../routes';
import Logo from '../assets/image/LOGO.png';

const Navs = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to={HOME} className="navbar-brand">
            <img src={Logo} alt="logo" style={{ width: '50px', marginRight: '10px' }}></img>
            HiPlant
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="title"></div>
            <Nav className="m-auto">
              <NavLink to={HOME} className="nav-link">
                Home
              </NavLink>
              <NavLink to={ABOUT} className="nav-link">
                About Us
              </NavLink>
              <NavLink to={COMMUNTIY} className="nav-link">
                Community
              </NavLink>
            </Nav>
            <NavLink to={LOGIN} className="nav-link">
              <Button variant="success" className="ms-5">
                Join Us
              </Button>{' '}
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navs;
