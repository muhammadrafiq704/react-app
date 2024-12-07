import axios from "axios";
import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { useCrypto } from "../context/CryptoContext";
import {
  Container,
  LinearProgress,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { numberWithCommas } from "./Banner/Carousel";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const [page, setPage] = useState(1);

  // context api
  const { currency, symbol } = useCrypto();
  const navigate = useNavigate();

  // fetch the coins api coins list function
  const fetchCoins = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
      setLoading(false);
    } catch (error) {
      console.log("Error Fetching coins list", error);
    }
  };
  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  const handleSearch = () => {
    return coins && search
      ? coins?.filter(
          (coin) =>
            coin?.name.toLowerCase().includes(search) ||
            coin?.symbol.toLowerCase().includes(search)
        )
      : coins;
  };
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ alignItems: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "monospace" }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search the coins"
          style={{ margin: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <>
              <Table>
                <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                  <TableRow>
                    {["Coins", "Price", "24h Change", "Market Cap"].map(
                      (head) => (
                        <TableCell
                          key={head}
                          align={head === "Coins" ? "" : "right"}
                          style={{
                            color: "black",
                            fontWeight: 800,
                            fontFamily: "monospace",
                          }}
                        >
                          {head}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {handleSearch()
                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                    .map((row) => {
                      const profit = row.price_change_percentage_24h > 0;
                      return (
                        <TableRow
                          onClick={() => navigate(`coins/${row.id}`)}
                          key={row.name}
                          style={{}}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            style={{
                              display: "flex",
                              gap: 15,
                            }}
                          >
                            <img
                              src={row?.image}
                              alt={row?.name}
                              height="50"
                              style={{
                                marginBottom: 10,
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span
                                style={{
                                  textTransform: "uppercase",
                                  fontSize: 22,
                                }}
                              >
                                {row.symbol}
                              </span>
                              <span style={{ color: "darkgrey" }}>
                                {row?.name}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell align="right">
                            {symbol}{" "}
                            {numberWithCommas(row.current_price.toFixed(2))}
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{
                              color: profit ? "rgb(14, 203, 129)" : "red",
                              fontWeight: 500,
                            }}
                          >
                            {profit && "+"}{" "}
                            {numberWithCommas(
                              row.price_change_percentage_24h.toFixed(2)
                            )}
                            %
                          </TableCell>
                          <TableCell align="right">
                            {symbol}{" "}
                            {numberWithCommas(
                              row.market_cap.toString().slice(0, -6)
                            )}
                            M
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </>
          )}
        </TableContainer>
        <Pagination
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 20,
            width: "100%",
            color: "gold",
          }}
          count={handleSearch()?.length / 10}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
