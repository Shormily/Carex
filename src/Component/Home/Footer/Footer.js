import React from 'react';

const Footer = () => {
    return (
        <>
         <div className="bg-dark p-5 mt-5">
      <div className="container ">
        <div className="row font text-light  ">
          <div className="col-12 col-md-6 col-lg-4 font ">
            <h2>Cars</h2>
            <p>
              With a community of over 400 million users (and a majority age
              group being 18 to 29), wouldn’t you want to make sure you’re
              monitoring what people are posting on social networks?
            </p>
            <div className="g-2">
               <i  className="fa-brands fa-facebook  fa-2x mx-1 hover"></i><i className="fa-brands fa-instagram fa-2x mx-1 hover"></i><i className="fa-brands fa-linkedin fa-2x mx-1 hover"></i><i className="fa-brands fa-twitter-square fa-2x mx-1 hover"></i>
            </div>
           
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h2>HEAD OFFICE</h2>
            <p>4096 N Highland St, Arlington VA 32101, USA</p>
            <p>info@company.com 800 1234 56 78</p>
            <br />
            <p>Mon-Thu: 9:30 – 21:00</p>
            <p>Fri: 6:00 – 21:00</p>
            <p>Sat: 10:00 – 15:00</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h2>LATEST POSTS</h2>
            <p>Global Private Equity Report 2019 July 5, 2019</p>
            <p>Reinventing the Role of Medical... July 5, 2019</p>
            <p>How Retailers Can Cut Emissions July 5, 2019</p>
          </div>
          <hr />
          <p className="text-center text-info">
            © 2022 Imperion. All rights reserved. Theme design by Shormily Raisa
          </p>
        </div>
      </div>
    </div>
        </>
       
    );
};

export default Footer;