import React from "react";
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Tech from './components/Tech/Tech'
import Services from './components/Services/Services'
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
          <Navbar/>
          <Header/>
          <About/>
          <Tech/>
          <Services/>
          <Portfolio/>
          <Contact/>
    </>
  );
}

export default App;
