import React from 'react';
import savage from "../Images/savage.jpg";
import img28 from "../Images/img28.png";
import "./Contact.css";

const Contact = () => {
    return (
      <>
     
      <div className='bg-dark p-3'>
      <div className='col-lg-12 col-md-12  container '  >
      <h1 className='text-center p-3 colors text-light'>Contact US</h1>
             <img className='w-100  h-75 shadow 'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src={savage} alt=""/>
             </div>
      </div>
     <div className='container'>
       <div className='row'>
       <div className="col-12 col-md-12 col-lg-6  p-5  " 
            >
              <p className="text-primary">CONTACT US</p>
              <input
                className="mt-5 mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 shadow container"
                placeholder="Name*"
                type="text"
              />
              <br />
              <input
                className="mt-5 mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 shadow"
                placeholder="E-mail*"
                type="text"
              />
              <br />
              <textarea
                className="mt-5 p-4 col-lg-6 col-md-6 col-12 w-75 shadow"
                placeholder="Message"
                type="text"
              />
              <br/>
              <button className='omor mt-2 p-2'>Send Me message</button>
              
            </div>
            
       <div className="col-12 col-md-12 col-lg-6  p-5 "  
            >
              <img className='w-100 mt-5' src={img28} alt=""/>
            </div>
       </div>
     </div>
            
        {/* <div className='container '>
    <div className='row mt-5'>
   
             <div className="col-12 col-md-12 col-lg-6 "     
            >
              <p className="text-primary">CONTACT US</p>
              <input
                className="mt-5 mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 shadow container"
                placeholder="Name*"
                type="text"
              />
              <br />
              <input
                className="mt-5 mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 shadow"
                placeholder="E-mail*"
                type="text"
              />
              <br />
              <textarea
                className="mt-5 p-4 col-lg-6 col-md-6 col-12 w-75 shadow"
                placeholder="Message"
                type="text"
              />
            </div>
           
             
    </div>
    <button className="googole-btn bg-primary p-2 w-25 ms-auto col-sm-12 mt-2">
                Search
              </button>

       
        </div> */}
        </>
    );
};

export default Contact;