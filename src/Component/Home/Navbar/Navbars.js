import React from "react";
// import { Navbar } from 'react-bootstrap';
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Navbar.css";

const Navbars = () => {
  const { user, logout } = useFirebase();
  return (
    <>
      <Navbar className="nav-bar shadow sticky-top p-4 bg-light " expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center d-flex align-items-center animate__animated animate__backInRight">
              <Nav.Link as={NavLink} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link">
                About US
              </Nav.Link>
              <Nav.Link as={NavLink} to="/service" className="nav-link">
                Service
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="nav-link">
                Contact US
              </Nav.Link>
              {!user?.email && (
                <Nav.Link
                  as={NavLink}
                  className="nav-link text-light"
                  to="/login"
                >
                  Sign In <i class="fa-solid fa-arrow-right-long"></i>
                </Nav.Link>
              )}
              {user?.email && (
                <Nav.Link
                  onClick={logout}
                  as={NavLink}
                  className="nav-link  text-light"
                  to="/login  "
                >
                  SignOut <i className="fa-solid fa-arrow-right-long"></i>
                  <span>
                    {user?.photoURL ? (
                      <img className="user-img" src={user.photoURL} alt="" />
                    ) : (
                      <small className="text-dark ms-3">
                        {user?.displayName}
                      </small>
                    )}
                  </span>
                </Nav.Link>
              )}
              
            </Nav>
           
          </Navbar.Collapse>
         
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
