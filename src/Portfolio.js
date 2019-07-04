import React from "react";
import "./Portfolio.css";

import Container from "./container/Container";
import Header from "./container/Header";
import Items from "./containers/Items";

function Portfolio() {
  return [
    <Container className="Portfolio">
      <Header className="Portfolio-header" />
      <Items />
      <About />
    </Container>,
    <Contact />
  ];
}

export default Portfolio;
