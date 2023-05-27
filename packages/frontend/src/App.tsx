import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "./components/atoms/button";
import { Header } from "./components/organism/header";
import Home from "./pages/home";
import BuyInsurance from "./pages/buy-insurance";
import Footer from "./components/organism/footer";
import "./index.scss";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/buy-insurance" Component={BuyInsurance} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
