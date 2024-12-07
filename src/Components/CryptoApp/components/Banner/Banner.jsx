import { Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div style={{ backgroundImage: "url(/banner2.jpg)" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: " 20px",
          justifyContent: "space-around",
          height: 400,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "40p%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "monospace",
            }}
          >
            Crypto Mini Market
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              textTransform: "capitalize",
              color: "darkgrey",
              fontFamily: "monospace",
            }}
          >
            Get all the info about your favorite crypto currencies!
          </Typography>
        </div>
        {/* carousel component  */}
        
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
