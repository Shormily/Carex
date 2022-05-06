import React from "react";
import img29 from "../Home/Images/img29.jpg";
import img23 from "../Home/Images/img23.jpg";
import img26 from "../Home/Images/img26.jpg";
import "./Testimonials.css";


const Testimonial = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          
          <div className="col-lg-4 col-md-4 col-sm-12" >
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={img26} alt="" />
                  <div className="overlay">
                    <div >
                      <p className="text "> $34,0000</p>
                     </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-center">Lambergini Car</h3>
                <p className="text-center p-3">Our latest Car It is very beautiful car our show room</p>
                <p className="text-center bg-coloe p-1">Buy Now <i className="fa-solid fa-arrow-right-long"></i></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={img23} alt="" />
                  <div className="overlay">
                    <div >
                      <p className="text "> $34,0000</p>
                     </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-center">Lambergini Car</h3>
                <p className="text-center p-3">Our latest Car It is very beautiful car our show room</p>
                <p className="text-center bg-coloe  p-1">Buy Now <i className="fa-solid fa-arrow-right-long"></i></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12" >
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={img29} alt="" />
                  <div className="overlay">
                    <div >
                      <p className="text "> $34,0000</p>
                     </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-center">Lambergini Car</h3>
                <p className="text-center p-3">Our latest Car It is very beautiful car our show room</p>
                <p className="text-center bg-coloe  p-1">Buy Now <i className="fa-solid fa-arrow-right-long"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
