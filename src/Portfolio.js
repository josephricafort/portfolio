import React from "react";
import "./Portfolio.css";

import styled from "@emotion/styled";

/* Components */
import Header from "./containers/Header";
import Intro from "./containers/Intro";
import PortfolioItems from "./containers/PortfolioItems/PortfolioItems";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Blog from "./containers/Blog";

const Container = styled.div``;

function Portfolio() {
  return [
    <Container maxWidth="lg" className="Portfolio">
      <Header className="Header" />
      <Intro className="Header" />
      <PortfolioItems className="Portfolio" />
      <Blog className="Blog" />
      <About className="About" />
    </Container>,
    <Footer className="Footer">
      <Contact className="Contact" />
    </Footer>,
  ];
}

export default Portfolio;
