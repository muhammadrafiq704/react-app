import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCrypto } from "../context/CryptoContext";

const Header = () => {
  const navigate = useNavigate();
  const { setCurrency, currency } = useCrypto();
  // console.log("currency", currency);
  const Coins = [
    { id: 1, name: "USD" },
    { id: 2, name: "PKR" },
  ];
  const handleNavigate = () => {
    navigate("/crypto-app");
  };

  const darkMode = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkMode}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={handleNavigate}
              sx={{
                color: "yellow",
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              {" "}
              Crypto App
            </Typography>
            <Select
              variant="outlined"
              sx={{ width: 100, height: 40, marginLeft: 100 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {Coins.map((item, id) => (
                <MenuItem key={id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
