import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCrypto } from "../context/CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/api";
import { LinearProgress, Typography } from "@mui/material";
import reactHtmlParser from "react-html-parser";
import { numberWithCommas } from "./Banner/Carousel";
import CoinInfo from "./CoinInfo";

const CoinsPage = () => {
  const [coin, setCoin] = useState({});
  const { id } = useParams();

  const { currency, symbol } = useCrypto();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  console.log("coin", coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) {
    return <LinearProgress style={{ backgroundColor: "gold" }} />;
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRight: "1px solid darkgrey",
            width: " 30%",
            paddingRight: 30,
            paddingLeft: 20,
            marginTop: 20,
          }}
        >
          <img
            src={coin?.image?.large}
            alt={coin?.name}
            height="250"
            style={{ marginBottom: 20 }}
          />
          <Typography
            variant="h3"
            style={{
              color: "white",
              fontFamily: "monospace",
              marginBottom: 20,
            }}
          >
            {coin?.name}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: "darkgrey",
              padding: 20,
              paddingLeft: 20,
              paddingBotton: 15,
              width: "100%",
              fontFamily: "monospace",
              textAlign: "justify",
            }}
          >
            {reactHtmlParser(coin?.description?.en.split(". ")[0])}.
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "start",
              paddingLeft: 20,
            }}
          >
            <span style={{ color: " white", paddingBottom: 10 }}>
              <Typography
                variant="h6"
                style={{ fontFamily: "monospace", fontWeight: "bold " }}
              >
                Rank:{coin?.market_cap_rank || ""}
              </Typography>
            </span>
            <span style={{ color: " white", paddingBottom: 10 }}>
              <Typography
                variant="h6"
                style={{ fontFamily: "monospace", fontWeight: "bold " }}
              >
                Current Price: {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data?.current_price[currency.toLowerCase()] || ""
                )}
              </Typography>
            </span>
            <span style={{ color: " white", paddingBottom: 10 }}>
              <Typography
                variant="h6"
                style={{ fontFamily: "monospace", fontWeight: "bold " }}
              >
                Market Cap: {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data?.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6) || ""
                )}
                M
              </Typography>
            </span>
          </div>
        </div>
        {/* chart js 2  */}
        <CoinInfo coin={coin} />
      </div>
    </>
  );
};

export default CoinsPage;
