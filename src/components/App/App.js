import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";


import { Home } from '../../pages/Home/';
import { Contact } from '../../pages/Contact/';
import { Introduction } from '../../pages/Introduction';
import { News } from '../../pages/News';
import { Product } from '../../pages/Product';
import { Promotion } from '../../pages/Promotion';
import { AddProduct } from '../../pages/AddProduct';

import { UserBar } from '../../components/UserBar';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { Register } from '../../pages/Register';
import { Login } from '../../pages/Login';
import { PrivateRoute } from '../../auth/PrivateRoute';
import { CartContext } from '../../contexts';
import { Cart } from '../../pages/Cart';
import Admin from '../../pages/Admin/Admin';


function App() {
  return (
    <div className="App">
      <Router>
        <CartContext>
          <header>
            <UserBar className="position-fixed" />
            <NavBar />
          </header>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/news" component={News} />
            <Route path="/product" component={Product} />
            <Route path="/promotion" component={Promotion} />
            <PrivateRoute path="/api/add-product" component={AddProduct} />
            <PrivateRoute path="/cart" component={Cart} />
            <PrivateRoute path="/auth/admin" component={Admin} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </main>
          <footer className="footer u-margin-top-medium">
            <Footer />
          </footer>
        </CartContext>
      </Router>
    </div>
  );
}

export { App };
