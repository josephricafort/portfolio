import React from "react";
import "./Portfolio.css";

import Container from "./containers/Container";
import Header from "./containers/Header";
import Intro from "./containers/Intro";
import PortfolioItems from "./containers/PortfolioItems";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";

function Portfolio() {
  return [
    <Container className="Portfolio">
      <Header className="Header" />
      <Intro className="Header" />
      <PortfolioItems className="Items" />
      <About className="About" />
    </Container>,
    <Footer className="Footer">
      <Contact className="Contact" />
    </Footer>
  ];
}

export default Portfolio;
