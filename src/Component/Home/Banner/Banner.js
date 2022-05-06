import React from 'react';
// import { Carousel, Container } from 'react-bootstrap';
// import img4 from "../Images/img4.jpg";
// import img5 from "../Images/img5.jpg";
// import img6 from "../Images/img6.jpg";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {
    return (
        <>
        <Container fluid className="banner-section p-0">
        <Carousel variant="ligth" fade>
          <Carousel.Item className="carousel-one">
            <Container className="px-md-5">
              <Row>
                <Col sm={12} lg={6}>
                  <div className="animate__animated animate__fadeInLeft ">
                    <h5 className="banner-sub-title">Welcome to </h5>
                    <h1 className="banner-title mb-2 text-shadow text-light">FIND THE RIGHT CAR FOR YOU</h1>
                   
                    <NavLink to="/services">
                      <Button className="deliveryhut-btn px-4 py-2 text-shadow  text-danger" variant="">
                        Services
                      </Button>
                    </NavLink>
                  </div>
                </Col>
                <Col sm={12} lg={6}></Col>
              </Row>
            </Container>
          </Carousel.Item>

         

          <Carousel.Item className="carousel-three">
            <Container className="px-md-5">
              <Row>
                <Col sm={12} lg={6}>
                  <div className="animate__animated animate__fadeInLeft ">
                    <h5 className="banner-sub-title title-1">
                      With help from our fleet
                    </h5>
                    <h1 className="banner-title mb-2 text-shadow">SEND IT ANYWHERE</h1>
                    
                    <NavLink to="/contact">
                      <Button className="deliveryhut-btn px-4 py-2 text-shadow  text-danger" variant="">
                        Contact Us
                      </Button>
                    </NavLink>
                  </div>
                </Col>
                <Col sm={12} lg={6}></Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
      <div className='container text-center '>
               <div className='row'>
<div className='border-box col-lg-2 col-md-3 col-sm-6 shadow  hover ' >
<i className="fa-solid fa-phone  fa-4x p-5   "></i>
    <h6>CONTACT US</h6>
    
</div>
<div className='border-box col-lg-2 col-md-3 col-sm-6 shadow hover' >
<i className="fa-solid fa-car-rear  fa-4x p-5   "></i>
    <h6>NEW VEHICLES</h6>
    
</div>
<div className='border-box col-lg-2 col-md-3 col-sm-6 shadow hover'>
<i className="fa-brands fa-buffer  fa-4x p-5   "></i>
    <h6>SPECIAL OFFERS</h6>
    
</div>
<div className='border-box col-lg-2 col-md-3 col-sm-6 shadow hover'>
<i className="fa-solid fa-comments-dollar  fa-4x p-5   "></i>
    <h6>APPLY FINANCE</h6>
   
</div>
<div className='border-box col-lg-2 col-md-3 col-sm-6 shadow hover' >
<i className="fa-solid fa-hammer  fa-4x p-5   "></i>
    <h6>VEHICLES SERVICE</h6>
   
</div>
<div className='border-box col-lg-2 col-md-3 col-sm-6 shadow hover' >
<i className="fa-brands fa-galactic-republic fa-4x p-5 "></i>
    
    <h6>VEHICLES PARTS</h6>
</div>
               </div>
           </div>
        </>
    );
};

export default Banner;