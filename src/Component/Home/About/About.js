import React from "react";
// import women from "../Images/women.png";
import CountUp from "react-countup";
import "./About.css";
import Testimonial from "../../Testimonials/Testimonial";

const About = () => {
  return (
    <>
      <h1 className="text-center mt-5 colors">About US</h1>

      <div className="container ">
        <div className="row d-flex display">
          <div className="col-lg-6 col-md-12 col-sm-12" >
            <p className="mt-5">About US</p>
            <h1  className="colors"> THE CAR DEALER</h1>
            <p>
              Everything you need to build an amazing dealership website Being
              developed on Visual Composer Drag and Drop Page Builder, It is
              fully responsive on any device. Unique designs, captivating
              sliders, and innovative website building tools work seamlessly to
              boost your business online.
            </p>
          </div>
          <div className="col-lg-3 col-md-6  col-sm-6 ">
            <CountUp end={2050} duration={100} className="countup-font " />
            <p>Happy Clients</p>
          </div>
          <div className="col-lg-3 col-md-6  col-sm-6">
            <CountUp end={2010} duration={100} className="countup-font " />
            <p>Car Item</p>
          </div>
        </div>
      </div>
      <Testimonial />
      <div className="container">
        <div className="row display">
          <div className="col-lg-5 col-md-12 col-sm-12 mt-5">
            <iframe
              width="560"
              height="315"
              className="container"
              src="https://www.youtube.com/embed/5vBcefbqgLc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 " >
            <h1  className="colors">FIND YOUR DREAM CAR</h1>
            <p>
              Suitable for any car dealer websites, business or corporate
              websites. The Theme has been Created especially for Automotive
              Dealers, car resellers, car service stations, mechanic workshop
              and auto motor retailers. Incredible Premium WordPress Theme with
              powerful customization. CAR DEALER FOUNDER Kevin walsh
            </p>
          </div>
        </div>
      </div>
<div className="story-section mt-4">
<h1 className="text-light ">See Our Website and Buy Now our Car</h1>
</div>
    
      <div className="container">
        <div className="row text-center">
          <p className="text-center text-secondry mt-5">
            Because We are ultra creative agency
          </p>
          <h1 className="text-center text-secondry mb-5 colors">WHY CHOOSE US</h1>
          <div className="col-lg-3 col-sm-12"  >
            <i className="fa-solid fa-car center fa-3x text-secondary rounded-5 "></i>
            <h5 >ALL BRANDS</h5>
           
            <p>
              Printin lorem Ipsum is simply dummy text of the k a galley of type
              and
            </p>
          </div>
          <div className="col-lg-3  col-sm-12">
            <i className="fa-solid fa-message fa-3x text-secondary"></i>
            <h5  >FREE SUPPORT</h5>
            <p>
              Printin lorem Ipsum is simply dummy text of the k a galley of type
              and
            </p>
          </div>
          <div className="col-lg-3  col-sm-12">
            <i className="fa-brands fa-keycdn fa-3x text-secondary"></i>
            <h5  >DEALERSHIP</h5>
            <p>
              Printin lorem Ipsum is simply dummy text of the k a galley of type
              and
            </p>
          </div>
          <div className="col-lg-3 col-sm-12 text-center" >
            <i className="fa-brands fa-artstation fa-3x text-secondary"></i>
            <h5  >AFFORDABLE</h5>
            <p>
              Printin lorem Ipsum is simply dummy text of the k a galley of type
              and
            </p>
          </div>
          <div className="col-lg-3  col-sm-12 mt-4" >
          <i className="fa-brands fa-pied-piper-alt fa-3x text-secondary"></i>
            <h5  >OIL CHANGES</h5>
            <p>
              Printin lorem Ipsum is simply dummy text of the k a galley of type
              and
            </p>
          </div>
          <div className="col-lg-3  col-sm-12  mt-4">
          <i className="fa-solid fa-fan fa-3x text-secondary"></i>
            <h5  >AIR CONDITIONING</h5>
            <p>
              Printin lorem Ipsum is simply dummy text of the k a galley of type
              and
            </p>
          </div>
          <div className="col-lg-3  col-sm-12 mt-4" >
          <i className="fa-brands fa-asymmetrik fa-3x text-secondary"></i>
            <h5  >AUTO ELECTRIC</h5>
            <p>
              Printin lorem Ipsum is simply dummy text of the k a galley of type
              and
            </p>
          </div>
          <div className="col-lg-3 col-sm-12 text-center mt-4" >
          <i className="fa-solid fa-road-spikes fa-3x text-secondary"></i>
            <h5  >TRANSMISSION</h5>
            <p className="text-dark">
              Printin lorem Ipsum is simply dummy text of the k a galley of type
              and
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
