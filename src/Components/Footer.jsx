import React from 'react';

const Footer = () => {
  return (
    <>
      <footer id="footer" className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="footer-top-area">
              <div className="row d-flex flex-wrap justify-content-between">
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu">
                    <img src="assets/images/main-logo.png" alt="logo" />
                    <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                    <div className="social-links">
                      <ul className="d-flex list-unstyled">
                        <li>
                          <a href="/">
                            <svg className="facebook">
                              <use xlinkHref="#facebook" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <svg className="instagram">
                              <use xlinkHref="#instagram" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <svg className="twitter">
                              <use xlinkHref="#twitter" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <svg className="linkedin">
                              <use xlinkHref="#linkedin" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <svg className="youtube">
                              <use xlinkHref="#youtube" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 pb-3">
                  <div className="footer-menu text-uppercase">
                    <h5 className="widget-title pb-2">Quick Links</h5>
                    <ul className="menu-list list-unstyled text-uppercase">
                      <li className="menu-item pb-2">
                        <a href="/">Home</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/">About</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/">Shop</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/">Blogs</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu text-uppercase">
                    <h5 className="widget-title pb-2">Help & Info Help</h5>
                    <ul className="menu-list list-unstyled">
                      <li className="menu-item pb-2">
                        <a href="/">Track Your Order</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/">Returns Policies</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/">Shipping + Delivery</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/">Contact Us</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/">Faqs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu contact-item">
                    <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                    <p>Do you have any queries or suggestions? <a href="mailto:">yourinfo@gmail.com</a></p>
                    <p>If you need support? Just give us a call. <a href="/">+55 111 222 333 44</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </footer>

      <div id="footer-bottom">
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-between">
            <div className="col-md-4 col-sm-6">
              <div className="Shipping d-flex">
                <p>We ship with:</p>
                <div className="card-wrap ps-2">
                  <img src="assets/images/dhl.png" alt="visa" />
                  <img src="assets/images/shippingcard.png" alt="mastercard" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="payment-method d-flex">
                <p>Payment options:</p>
                <div className="card-wrap ps-2">
                  <img src="assets/images/visa.jpg" alt="visa" />
                  <img src="assets/images/mastercard.jpg" alt="mastercard" />
                  <img src="assets/images/paypal.jpg" alt="paypal" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="copyright">
                <p>© Copyright 2023 MiniStore. Design by <a href="/">Pros Dev</a> Contribution by <a href="/">Muhammad Rafiq</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
      <symbol xmlns="http://www.w3.org/2000/svg" id="facebook" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="youtube" viewBox="0 0 32 32">
        <path fill="currentColor" d="M29.41 9.26a3.5 3.5 0 0 0-2.47-2.47C24.76 6.2 16 6.2 16 6.2s-8.76 0-10.94.59a3.5 3.5 0 0 0-2.47 2.47A36.13 36.13 0 0 0 2 16a36.13 36.13 0 0 0 .59 6.74a3.5 3.5 0 0 0 2.47 2.47c2.18.59 10.94.59 10.94.59s8.76 0 10.94-.59a3.5 3.5 0 0 0 2.47-2.47A36.13 36.13 0 0 0 30 16a36.13 36.13 0 0 0-.59-6.74ZM13.2 20.2v-8.4l7.27 4.2Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="twitter" viewBox="0 0 256 256">
        <path fill="currentColor" d="m245.66 77.66l-29.9 29.9C209.72 177.58 150.67 232 80 232c-14.52 0-26.49-2.3-35.58-6.84c-7.33-3.67-10.33-7.6-11.08-8.72a8 8 0 0 1 3.85-11.93c.26-.1 24.24-9.31 39.47-26.84a110.93 110.93 0 0 1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8 8 0 0 1 13.65-4.92c.35.35 33.28 33.1 73.54 43.72V88a47.87 47.87 0 0 1 14.36-34.3A46.87 46.87 0 0 1 168.1 40a48.66 48.66 0 0 1 41.47 24H240a8 8 0 0 1 5.66 13.66Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="instagram" viewBox="0 0 256 256">
        <path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="linkedin" viewBox="0 0 24 24">
        <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
      </symbol>
        {/* Add other symbols similarly */}
      </svg>
    </>
  );
};

export default Footer;
