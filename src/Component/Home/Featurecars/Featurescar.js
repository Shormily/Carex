import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import SwiperCore, { Autoplay } from "swiper";
// import img12 from "../Images/img12.jpg";
import img21 from "../Images/img21.jpg";
import img23 from "../Images/img23.jpg";
import img24 from "../Images/img24.jpg";
import img25 from "../Images/img25.jpg";
import img26 from "../Images/img26.jpg";
import img27 from "../Images/img27.jpg";
import img28 from "../Images/img28.jpg";
import img29 from "../Images/img29.jpg";
import img30 from "../Images/img30.jpg";
import img32 from "../Images/img32.jpg";
import "./Featurescar.css";

const Featurescar = () => {
  // SwiperCore.use([Autoplay]);
  return (
    <>
      <section id="skill">
        <div>
         
          <h1 className="text-center mt-5 animate__animated animate__zoomIn colors"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          FEATURE CAR
          </h1>
          <p className="text-center">Check out our recent cars</p>
          <div className="color mt-5 mb-5">
            <div className="container mt-5  mb-5  animate__animated animate__slideInUp">
              <Swiper
                breakpoints={{
                  440:{
                    slidesPerView: 1
                  },
                  500:{
                    slidesPerView: 1
                  },
                  630:{
                    slidesPerView: 1
                  },
                  885:{
                    slidesPerView: 1
                  },
                  1373:{
                    slidesPerView: 1
                  },
                  1106:{
                    slidesPerView: 1
                  },
                  1490:{
                    slidesPerView: 3
                  },
                 
                 
                 
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={70}
                slidesPerView={3}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                loop={true}
                // autoplay={{
                //   delay: 500,
                //   disableOnInteraction: false,
                // }}

                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="col-lg-12 col-md-12 col-12 p-2 round-2">
                  <div className="card-container rounded-3">
                    <div className="">
                      <div className="image-container">
                        <img src={img21} alt="" />
                        <p className="text-center bg-dark text-light p-2">
                          $34,900.00
                        </p>
                        <p className="text-center text-danger ">
                          This is the most leatest car our car showroom
                        </p>
                        <p className="text-center text-info text-dark">
                          2022 Audi A4
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
               
                <SwiperSlide className="col-lg-12 col-md-12 col-12">
                  <div className="card-container rounded-3">
                    <div className="">
                      <div className="image-container">
                        <img src={img23} alt="" />
                        <p className="text-center bg-dark text-light p-2">
                          $34,900.00
                        </p>
                        <p className="text-center text-danger ">
                          This is the most leatest car our car showroom
                        </p>
                        <p className="text-center text-info text-dark">
                          2022 Audi A4
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12 col-md-12 col-12">
                  <div className="card-container rounded-3">
                    <div className="">
                      <div className="image-container">
                        <img src={img24} alt="" />
                        <p className="text-center bg-dark text-light p-2">
                          $34,900.00
                        </p>
                        <p className="text-center text-danger ">
                          This is the most leatest car our car showroom
                        </p>
                        <p className="text-center text-info text-dark">
                          2022 Audi A4
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              
               
                <SwiperSlide className="col-lg-12 col-md-12 col-12">
                  <div className="card-container rounded-3">
                    <div className="">
                      <div className="image-container">
                        <img src={img25} alt="" />
                        <p className="text-center bg-dark text-light p-2">
                          $34,900.00
                        </p>
                        <p className="text-center text-danger ">
                          This is the most leatest car our car showroom
                        </p>
                        <p className="text-center text-info text-dark">
                          2022 Audi A4
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12 col-md-12 col-12">
                  <div className="card-container rounded-3">
                    <div className="">
                      <div className="image-container">
                        <img src={img26} alt="" />
                        <p className="text-center bg-dark text-light p-2">
                          $34,900.00
                        </p>
                        <p className="text-center text-danger ">
                          This is the most leatest car our car showroom
                        </p>
                        <p className="text-center text-info text-dark">
                          2022 Audi A4
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12 col-md-12 col-12">
                  <div className="card-container rounded-3">
                    <div className="">
                      <div className="image-container">
                        <img src={img27} alt="" />
                        <p className="text-center bg-dark text-light p-2">
                          $34,900.00
                        </p>
                        <p className="text-center text-danger ">
                          This is the most leatest car our car showroom
                        </p>
                        <p className="text-center text-info text-dark">
                          2022 Audi A4
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12 col-md-12 col-12">
                  <div className="card-container rounded-3">
                    <div className="">
                      <div className="image-container">
                        <img src={img27} alt="" />
                        <p className="text-center bg-dark text-light p-2">
                          $34,900.00
                        </p>
                        <p className="text-center text-danger ">
                          This is the most leatest car our car showroom
                        </p>
                        <p className="text-center text-info text-dark">
                          2022 Audi A4
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12 col-md-12 col-12">
                  <div className="card-container rounded-3">
                    <div className="">
                      <div className="image-container">
                        <img src={img28} alt="" />
                        <p className="text-center bg-dark text-light p-2">
                          $34,900.00
                        </p>
                        <p className="text-center text-danger ">
                          This is the most leatest car our car showroom
                        </p>
                        <p className="text-center text-info text-dark">
                          2022 Audi A4
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12 col-md-12 col-12">
                  <div className="card-container rounded-3">
                    <div className="">
                      <div className="image-container">
                        <img src={img29} alt="" />
                        <p className="text-center bg-dark text-light p-2">
                          $34,900.00
                        </p>
                        <p className="text-center text-danger ">
                          This is the most leatest car our car showroom
                        </p>
                        <p className="text-center text-info text-dark">
                          2022 Audi A4
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12 col-md-12 col-12">
                  <div className="card-container rounded-3">
                    <div className="">
                      <div className="image-container">
                        <img src={img30} alt="" />
                        <p className="text-center bg-dark text-light p-2">
                          $34,900.00
                        </p>
                        <p className="text-center text-danger ">
                          This is the most leatest car our car showroom
                        </p>
                        <p className="text-center text-info text-dark">
                          2022 Audi A4
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12 col-md-12 col-12">
                  <div className="card-container rounded-3">
                    <div className="">
                      <div className="image-container">
                        <img src={img32} alt="" />
                        <p className="text-center bg-dark text-light p-2">
                          $34,900.00
                        </p>
                        <p className="text-center text-danger ">
                          This is the most leatest car our car showroom
                        </p>
                        <p className="text-center text-info text-dark">
                          2022 Audi A4
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featurescar;
