import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './components/layout/Nav';
import { Home } from './pages/HomePage';
import { LoginPage } from './pages/Auth/LoginPage'
import { CreditCardsPage } from './pages/CreditCards/CreditCardsPage';
import { CreditCardsCrudPage } from './pages/CreditCards/CreditCardsCrudPage'
import { ServicesPage } from './pages/Services/ServicesPage';
import { ServiceCrudPage } from './pages/Services/ServiceCrudPage';
import { TotalCost } from './pages/TotalCost/TotalCostPage';

export const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element = { <LoginPage /> } />
          <Route exact path="/home" element = { <Home /> }/>
          <Route exact path="/services" element = { <ServicesPage /> }/>
          <Route exact path="/services/crud" element = { <ServiceCrudPage />}/>
          <Route exact path="/creditcards" element = { <CreditCardsPage /> }/>
          <Route exact path="/creditcards/crud" element = { <CreditCardsCrudPage /> }/>
          <Route exact path="/totalcost" element = { <TotalCost /> }/>
        </Routes>
      </Router>
    </>
  );
}