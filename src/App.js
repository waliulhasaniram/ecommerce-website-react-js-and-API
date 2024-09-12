import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import About from "./About";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart.js";
import Error from "./Error.js";
import {GlobalStyle} from "./GlobalStyle.js";
import {ThemeProvider} from "styled-components";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";


const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return <>
  <ThemeProvider theme = {theme}>
    <BrowserRouter>
    <GlobalStyle />
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products" element={<Products />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/SingleProduct/:id" element={<SingleProduct />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
  </>;
};

export default App;
