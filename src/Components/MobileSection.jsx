import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export const MobileSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(".product-swiper", {
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
      // swiper.destroy();
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
        id="mobile-products"
        className="product-store position-relative padding-large no-padding-top"
      >
        <div className="container">
          <div className="row">
            <div className="display-header d-flex justify-content-between pb-3">
              <h2 className="display-7 text-dark text-uppercase">
                Dry Fruits
              </h2>
              <div className="btn-right">
                <a
                  href="/"
                  className="btn btn-medium btn-normal text-uppercase"
                >
                  Go to Shop
                </a>
              </div>
            </div>
            <div className="swiper product-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide"  style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', gap:'10px', }}>
                  <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="assets/images/banner-image1.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Almonds
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          This product is main occured in baltistans small town
                          in its pure and organic form, you can easily get this
                          by click below
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Buy Now
                      </Button>
                    </CardActions>
                  </Card>
                  <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="assets/images/banner-image1.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Almonds
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          This product is main occured in baltistans small town
                          in its pure and organic form, you can easily get this
                          by click below
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Buy Now
                      </Button>
                    </CardActions>
                  </Card>
                  <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="assets/images/banner-image1.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Almonds
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          This product is main occured in baltistans small town
                          in its pure and organic form, you can easily get this
                          by click below
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Buy Now
                      </Button>
                    </CardActions>
                  </Card>
                  <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="assets/images/banner-image1.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Almonds
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          This product is main occured in baltistans small town
                          in its pure and organic form, you can easily get this
                          by click below
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Buy Now
                      </Button>
                    </CardActions>
                  </Card>
                  <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="assets/images/banner-image1.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Almonds
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          This product is main occured in baltistans small town
                          in its pure and organic form, you can easily get this
                          by click below
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Buy Now
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
              <div
                onClick={handleNext}
                className="swiper-button-next swiper-button-white"
              ></div>
              <div
                onClick={handlePrev}
                className="swiper-button-prev swiper-button-white"
              ></div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination position-absolute text-center"></div>
      </section>
    </>
  );
};
export default MobileSection;
