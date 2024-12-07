import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";;

export const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(".testimonial-swiper", {
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
      <section id="testimonials" className="position-relative">
        <div className="container">
          <div className="row">
            <div className="review-content position-relative">
              <div  onClick={handlePrev} className="swiper-icon swiper-arrow swiper-arrow-prev position-absolute d-flex align-items-center">
                <svg className="chevron-left">
                  <use href="#chevron-left" />
                </svg>
              </div>
              <div className="swiper testimonial-swiper">
                <div className="quotation text-center">
                  <svg className="quote">
                    <use href="#quote" />
                  </svg>
                </div>
                <div className="swiper-wrapper">
                  <div className="swiper-slide text-center d-flex justify-content-center">
                    <div className="review-item col-md-10">
                      <i className="icon icon-review"></i>
                      <blockquote>
                        “Tempus oncu enim pellen tesque este pretium in neque,
                        elit morbi sagittis lorem habi mattis Pellen tesque
                        pretium feugiat vel morbi suspen dise sagittis lorem
                        habi tasse morbi.”
                      </blockquote>
                      <div className="rating">
                        <svg className="star star-fill">
                          <use href="#star-fill"></use>
                        </svg>
                        <svg className="star star-fill">
                          <use href="#star-fill"></use>
                        </svg>
                        <svg className="star star-fill">
                          <use href="#star-fill"></use>
                        </svg>
                        <svg className="star star-half">
                          <use href="#star-half"></use>
                        </svg>
                        <svg className="star star-empty">
                          <use href="#star-empty"></use>
                        </svg>
                      </div>
                      <div className="author-detail">
                        <div className="name text-dark text-uppercase pt-2">
                          Emma Chamberlin
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide text-center d-flex justify-content-center">
                    <div className="review-item col-md-10">
                      <i className="icon icon-review"></i>
                      <blockquote>
                        “A blog is a digital publication that can complement a
                        website or exist independently. A blog may include
                        articles, short posts, listicles, infographics, videos,
                        and other digital content.”
                      </blockquote>
                      <div className="rating">
                        <svg className="star star-fill">
                          <use href="#star-fill"></use>
                        </svg>
                        <svg className="star star-fill">
                          <use href="#star-fill"></use>
                        </svg>
                        <svg className="star star-fill">
                          <use href="#star-fill"></use>
                        </svg>
                        <svg className="star star-half">
                          <use href="#star-half"></use>
                        </svg>
                        <svg className="star star-empty">
                          <use href="#star-empty"></use>
                        </svg>
                      </div>
                      <div className="author-detail">
                        <div className="name text-dark text-uppercase pt-2">
                          Jennie Rose
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  onClick={handleNext} className="swiper-icon swiper-arrow swiper-arrow-next position-absolute d-flex align-items-center">
                <svg className="chevron-right">
                  <use href="#chevron-right" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="star-empty"
          viewBox="0 0 16 16"
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="star-half"
          viewBox="0 0 16 16"
        >
          <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="quote"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"
          />
        </symbol>
        {/* Add other symbols similarly */}
      </svg>
    </>
  );
};
