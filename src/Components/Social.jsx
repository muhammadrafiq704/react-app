import React from 'react'

export const Social = () => {
  
  return (
    <>
     <section id="instagram" class="padding-large overflow-hidden no-padding-top">
      <div class="container">
        <div class="row">
          <div class="display-header text-uppercase text-dark text-center pb-3">
            <h2 class="display-7">Shop Our Insta</h2>
          </div>
          <div class="d-flex flex-wrap">
            <figure class="instagram-item pe-2">
              <a href="/" class="image-link position-relative">
                <img src="assets/images/insta-item1.jpg" alt="instagram" class="insta-image"/>
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                    <use href="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="/" class="image-link position-relative">
                <img src="assets/images/insta-item2.jpg" alt="instagram" class="insta-image"/>
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                    <use href="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="/" class="image-link position-relative">
                <img src="assets/images/insta-item3.jpg" alt="instagram" class="insta-image"/>
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                    <use href="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="/" class="image-link position-relative">
                <img src="assets/images/insta-item4.jpg" alt="instagram" class="insta-image"/>
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                    <use href="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="/" class="image-link position-relative">
                <img src="assets/images/insta-item5.jpg" alt="instagram" class="insta-image"/>
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                    <use href="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
      <symbol xmlns="http://www.w3.org/2000/svg" id="instagram" viewBox="0 0 256 256">
        <path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z" />
      </symbol>
    </svg>
    </>  
)
}
