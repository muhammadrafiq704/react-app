import React from "react";

export const OfferSection = () => {
  return (
    <>
      <section
        id="yearly-sale"
        className="bg-light-blue overflow-hidden mt-5 padding-xlarge"
        style={{
          backgroundImage: "url('assets/images/single-image11.png')",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row d-flex flex-wrap align-items-center">
          <div className="col-md-6 col-sm-12">
            <div className="text-content offset-4 padding-medium">
              <h3>10% off</h3>
              <h2 className="display-2 pb-5 text-uppercase text-dark">
                To Our All Foreigners and Down Cities
              </h2>
              <a
              style={{color:'orange'}}
                href="/"
                className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12"></div>
        </div>
      </section>
    </>
  );
};
