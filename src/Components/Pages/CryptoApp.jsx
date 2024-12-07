import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../CryptoApp/components/HomePage";
import CoinsPage from "../CryptoApp/components/CoinsPage";
import Header from "../CryptoApp/components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { CryptoContextProvider } from "../CryptoApp/context/CryptoContext";
import 'react-alice-carousel/lib/alice-carousel.css';

const theme = createTheme();

const CryptoApp = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* crypto context provider */}
      <CryptoContextProvider>
        <Box
          sx={{
            backgroundColor: "#14161a",
            color: "white",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="coins/:id" element={<CoinsPage />} />
          </Routes>
        </Box> 
      </CryptoContextProvider>
    </ThemeProvider>
  );
};

export default CryptoApp;
