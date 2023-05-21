import './index.scss';

import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import Footer from './components/organism/footer';
import { Header } from './components/organism/header';
import BuyInsurance from './pages/buy-insurance';
import Home from './pages/home';

function App() {
  return (
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
  );
}

export default App;
