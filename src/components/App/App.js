import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import { Home } from '../../pages/Home/';
import { Contact } from '../../pages/Contact/';
import { Introduction } from '../../pages/Introduction';
import { News } from '../../pages/News';
import { Product } from '../../pages/Product';
import { Promotion } from '../../pages/Promotion';

import { UserBar } from '../../components/UserBar';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <UserBar />
          <NavBar />
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/news" component={News} />
          <Route path="/product" component={Product} />
          <Route path="/promotion" component={Promotion} />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export { App };
