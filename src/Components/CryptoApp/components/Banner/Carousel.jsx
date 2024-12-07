import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCrypto } from "../../context/CryptoContext";
import { TrendingCoins } from "../../config/api";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = useCrypto();

  const fetchTrendingCoins = async () => {
    try {
      const { data } = await axios.get(TrendingCoins(currency));
      setTrending(data);
    } catch (error) {
      console.log("error fetching trending coins", error);
    }
  };
  //   every fetch trending coins while currency changes
  // console.log("trending", trending);

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  // for carousel responsive
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  //   map trending and pass items to AliceCarousel
  const items = trending.map((coins) => {
    const profit = coins.price_change_percentage_24h >= 0;
    // console.log('profit', profit)
    return (
      <Link
        style={{
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          alignItems: "center",
          height: "50%",
        }}
        to={`coins/${coins.id}`}
      >
        <img
          src={coins?.image}
          alt={coins?.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span
          style={{
            color: "white",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {coins?.symbol}
          &nbsp;
          <span style={{ color: profit > 0 ? "green" : "red" }}>
            {profit && "+"} {coins?.price_change_percentage_24h.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, color: "white", fontWeight: 500 }}>
          {symbol} {numberWithCommas(coins?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50%",
      }}
    >
      {trending.length === 0 ? (
        <CircularProgress
          style={{
            color: "gold",
          }}
          size={50}
          thickness={1}
        />
      ) : (
        <>
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationType="fadeout"
            disableButtonsControls
            animationDuration={1500}
            disableDotsControls
            responsive={responsive}
            autoPlay
            items={items}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
