import React from "react";
import "./Portfolio.css";

import ContainerUI from "@material-ui/core/Container";

/* Components */
import Header from "./containers/Header";
import Intro from "./containers/Intro";
import PortfolioItems from "./containers/PortfolioItems/PortfolioItems";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Expertise from "./containers/Expertise";

/* Images */

function Portfolio() {
  return [
    <ContainerUI maxWidth="lg" className="Portfolio">
      <Header className="Header" />
      <Intro className="Header" />
      <PortfolioItems className="Portfolio"/>
      <Expertise className="Expertise" />
      <About className="About" />
    </ContainerUI>,
    <Footer className="Footer">
      <Contact className="Contact" />
    </Footer>
  ];
}

export default Portfolio;
