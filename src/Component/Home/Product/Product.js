import React from 'react';

const Product = (props) => {
    console.log(props.product);
    // const {img,price} = props.product
    const { img,price,name} = props.product || {};
    return (
        <>
       

         <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
     
         <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={img} alt="" />
                  <div className="overlay">
                    <div >
                      <p className="text "> ${price}</p>
                     </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-center mt-2">{name}</h3>
                <p className="text-center p-3">Our latest Car It is very beautiful car our show room</p>
                <p className="text-center bg-coloe p-1">Buy Now <i className="fa-solid fa-arrow-right-long"></i></p>
              </div>
            </div>
      </div>
        </>
    );
};

export default Product;