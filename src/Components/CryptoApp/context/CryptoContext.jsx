import React, { createContext, useContext, useState, useEffect } from "react";

const CryptoContext = createContext();
export const useCrypto = () => {
  return useContext(CryptoContext);
};

export const CryptoContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "PKR") setSymbol("Rs");
  }, [currency]);

  return (
    <CryptoContext.Provider
      value={{ currency, setCurrency, symbol, setSymbol }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
