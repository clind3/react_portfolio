import React, { useState } from "react";
import HomePage from "./components/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/main.css';

function App() {

  return (
    <body>
      <Header />
      <Router>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/about-me'>
          <AboutMe />
        </Route>
        <Route exact path='/contact-me'>
          <Contact />
        </Route>
      </Router>
      <Footer />
    </body>
   
  );
}

export default App;
