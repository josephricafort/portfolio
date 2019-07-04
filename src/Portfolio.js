import React from "react";
import "./Portfolio.css";

import Container from "./containers/Container";
import Header from "./containers/Header";
import Intro from "./containers/Intro";
import Items from "./containers/PortfolioItems";
import About from "./containers/About";
import Contact from "./containers/Contact";

function Portfolio() {
  return (
    <Container className="Portfolio">
      <Header className="Header" />
      <Intro className="Header" />
      <Items className="Items" />
      <About className="About" />
      <Contact className="Contact" />
    </Container>
  );
}

export default Portfolio;
