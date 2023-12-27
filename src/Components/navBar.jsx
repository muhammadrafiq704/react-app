import React from 'react'
import { Link } from 'react-router-dom';

const navBar = () => {
  return (
    <React.Fragment>
      <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
      <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          <a className="navbar-brand"  href="/">
            <img src="assets/images/main-logo.png" alt='' className="logo"/>
          </a>
          <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <svg className="navbar-icon">
              <use href="#navbar-icon"></use>
            </svg>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
            <div className="offcanvas-header px-4 pb-0">
              <Link className="navbar-brand" href="index.html">
                <img src="assets/images/main-logo.png" alt='' classNameName="logo"/>
              </Link>
              <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
            </div>
            <div className="offcanvas-body">
              <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link me-4 active" href="#billboard">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" href="#company-services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" href="#mobile-products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" href="#smart-watches">Watches</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" href="#yearly-sale">Sale</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" href="#latest-blog">Blog</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="about.html" className="dropdown-item">About</Link>
                    </li>
                    <li>
                      <Link href="blog.html" className="dropdown-item">Blog</Link>
                    </li>
                    <li>
                      <Link href="shop.html" className="dropdown-item">Shop</Link>
                    </li>
                    <li>
                      <Link href="cart.html" className="dropdown-item">Cart</Link>
                    </li>
                    <li>
                      <Link href="checkout.html" className="dropdown-item">Checkout</Link>
                    </li>
                    <li>
                      <Link href="single-post.html" className="dropdown-item">Single Post</Link>
                    </li>
                    <li>
                      <Link href="single-product.html" className="dropdown-item">Single Product</Link>
                    </li>
                    <li>
                      <Link href="contact.html" className="dropdown-item">Contact</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <div className="user-items ps-5">
                    <ul className="d-flex justify-content-end list-unstyled">
                      <li className="search-item pe-3">
                        <Link href="#" className="search-button">
                          <svg className="search">
                            <use href="#search"></use>
                          </svg>
                        </Link>
                      </li>
                      <li className="pe-3">
                        <Link href="#">
                          <svg className="user">
                            <use href="#user"></use>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="cart.html">
                          <svg className="cart">
                            <use href="#cart"></use>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </React.Fragment>
  )
};
export default navBar;
