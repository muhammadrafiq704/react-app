import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import Typography from '@mui/material/Typography';

const SliderSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(".main-swiper", {
      navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
      },
      loop: true,
    });

    // Set the Swiper instance to state
    setSwiperInstance(swiper);

    return () => {
      // Destroy Swiper instance when component unmounts
      swiper.destroy();
    };
  }, []);

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <>
      <section
        id="billboard"
        className="position-relative overflow-hidden bg-light-blue"
      >
        <div className="swiper main-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-6" style={{marginTop:'50px'}}>
                    <div className="banner-content">
                      <h1 className="display-2 text-uppercase text-dark pb-5">
                        Pure Walnuts from Northern Side
                      </h1>
                      <Typography
                      style={{marginBottom:'0px' , color:'grey'}}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        You want it at your door step then click below
                      </Typography>
                      <a
                      style={{color:'orange'}}
                        href="/"
                        className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="image-holder">
                      <img 
                      style={{marginTop:'100px'}}
                      src="assets/images/banner-image2.jpg" alt="banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="container">
                <div className="row d-flex flex-wrap align-items-center">
                  <div className="col-md-6">
                    <div className="banner-content" style={{marginTop:'80px'}}>
                      <h1 className="display-2 text-uppercase text-dark pb-5">
                        Big size Almonds are available
                      </h1>
                      <Typography
                      style={{marginBottom:'0px', color:'grey'}}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        You want it at your door step then click below
                      </Typography>
                      <a
                       style={{color:'orange'}}
                        href="/"
                        className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="image-holder">
                      <img 
                      style={{marginTop:'100px'}}
                      src="assets/images/banner-image1.jpg" alt="banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="container">
                <div className="row d-flex flex-wrap align-items-center">
                  <div className="col-md-6">
                    <div className="banner-content" style={{marginTop:'80px'}}>
                      <h1 className="display-2 text-uppercase text-dark pb-5">
                        Pure Quality Apricots Collects
                      </h1>
                      <Typography
                      style={{marginBottom:'0px', color:'grey'}}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        You want it at your door step then click below
                      </Typography>
                      <a
                       style={{color:'orange'}}
                        href="/"
                        className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="image-holder">
                      <img 
                      style={{marginTop:'100px'}}
                      src="assets/images/banner-image3.jpg" alt="banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
        style={{height:'60%'}}
          className="swiper-icon swiper-arrow swiper-arrow-prev"
          onClick={handlePrev}
        >
          <svg className="chevron-left">
            <use xlinkHref="#chevron-left" />
          </svg>
        </div>
        <div
         style={{height:'60%'}}
          className="swiper-icon swiper-arrow swiper-arrow-next"
          onClick={handleNext}
        >
          <svg className="chevron-right">
            <use xlinkHref="#chevron-right" />
          </svg>
        </div>
      </section>

      {/* Add the SVG symbols here */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="chevron-left" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </symbol>
        <symbol id="chevron-right" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </symbol>
        {/* Add other symbols similarly */}
      </svg>
    </>
  );
};

export default SliderSection;
