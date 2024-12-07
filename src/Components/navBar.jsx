import React from 'react'
import { Link } from 'react-router-dom';

const navLinks = [
  {
    name: "Home"
  },
  {
    name: "Services"
  },
  {
    name:'Product'
  },
  {
    name: "Sales"
  },
  {
    name: "Pure Salajeet"
  }
]

const   navBar = () => {

  return (
    <React.Fragment>
      <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
      <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          <a className="navbar-brand"  href="/">
            <img src="assets/images/main-logo1.png" alt='' className="logo"/>
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
                  <Link className="nav-link me-4 active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link me-4 active">Toggle Btn</button>
                </li>
                {/* {
                  show &&
                <li className="nav-item">
                  <button className="nav-link me-4 active" >Show when toggle clicked</button>
                </li>
                } */}
                {/* {
                  show ?
                <li className="nav-item">
                  <button className="nav-link me-4 active" >Show when toggle clicked</button>
                </li>
                :
                <li className="nav-item">
                  <button className="nav-link me-4 active" >Show when toggle unclicked</button>
                </li>

                } */}
                {/* <li className="nav-item">
                  <Link className="nav-link me-4" to="/service">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/product">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" href="#yearly-sale">Sale</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" href="#latest-blog">Pure Salajeet</Link>
                </li> */}
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

      
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
      <symbol xmlns="http://www.w3.org/2000/svg" id="nav-icon" viewBox="0 0 16 16">
        <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="close" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="navbar-icon" viewBox="0 0 16 16">
        <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />
      </symbol>
      <symbol id="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <title>Search</title>
        <path fill="currentColor" d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </symbol>
        {/* Add other symbols similarly */}
      </svg>
    </header>
    </React.Fragment>
  )
};
export default navBar;
