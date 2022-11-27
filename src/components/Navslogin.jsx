import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ABOUT, COMMUNTIY, HOME } from '../routes';
import Logo from '../assets/image/LOGO.png';
import './../style/navlogin.css'

const Navslogin = () => {
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navslogin;
