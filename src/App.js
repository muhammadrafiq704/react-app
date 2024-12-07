import "./App.css";
import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home.jsx";
import { Service } from "./Components/Pages/Service.jsx";
import { Products } from "./Components/Pages/Products.jsx";
import Practice from "./Components/Pages/practice.jsx";
import UserContextProvider from "./context/userContextProvider.jsx";
import Login from "./Components/login/login.jsx";
import Profile from "./Components/profile/profile.jsx";
import  { ThemeProvider } from "./context/ThemeContext.jsx";
import DictionaryApp from "./Components/practice/DictionaryApp/component/index.jsx";
import CryptoApp from "./Components/Pages/CryptoApp.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  
  function lightTheme() {
    setThemeMode("light");
  }
  function darkTheme() {
    setThemeMode("dark");
  }

  // console.log("themeMode", themeMode);
  //run when themeMode changes
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <React.Fragment>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <UserContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/service" element={<Service />}></Route>
              <Route path="/practice" element={<Practice />}></Route>
              <Route path="/product" element={<Products />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/dictionary" element={<DictionaryApp />}></Route>
              <Route path="/crypto-app/*" element={<CryptoApp />}></Route>
            </Routes>
          </Router>
        </UserContextProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
