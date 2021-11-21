
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './components/layout/Nav';
import { Home } from './pages/Home';
import { CreditCards } from './pages/CreditCards/CreditCards';
import { Services } from './pages/Services/Services';
import { TotalCost } from './pages/TotalCost/TotalCost';

export const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element = {'a'} />
          <Route exact path="/home" element = { <Home /> }/>
          <Route exact path="/services" element = { <Services /> }/>
          <Route exact path="/creditcards" element = { <CreditCards /> }/>
          <Route exact path="/totalcost" element = { <TotalCost /> }/>
        </Routes>
      </Router>
    </>
  );
}

