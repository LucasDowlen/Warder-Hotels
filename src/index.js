import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.js';
import Footer from './footer.js';
import App from './App';
import Booking from './book.js';
import Contact from './contact.js';

import "./CSS/style.css";

import ScrollToTop from './ScrollToTop.js';

import {BrowserRouter, Switch, Route} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={App} />
        <Route path={"/booking"} component={Booking} />
        <Route path={"/contact"} component={Contact}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);